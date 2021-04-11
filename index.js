"use strict"

const AggregateError = require("aggregate-error")
const ky = require("ky-universal").extend({
	throwHttpErrors: false
})

class SlothpixelError extends Error {
	constructor(message = "", ...args) {
		super(message, ...args)
		this.message = message
	}
}

module.exports = async (endpoint, slothpixelURL, options) => {
	if (typeof endpoint !== "string") {
		throw new TypeError("An endpoint must be provided!")
	}

	const result = await ky(endpoint, {
		prefixUrl: slothpixelURL || "https://api.slothpixel.me/api/",
		searchParams: options
	})

	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data
}

module.exports.graphql = async (data, slothpixelURL = "https://api.slothpixel.me/api/graphql") => {
	const result = await ky.post((slothpixelURL), {
		json: data
	})

	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const { data: data_, errors } = await result.json()

	if (errors) {
		if (errors.length === 1) {
			throw new SlothpixelError(errors[0].message)
		}

		throw new AggregateError(errors.map(({ message }) => new SlothpixelError(message)))
	}

	return data_
}

module.exports.playerStats = async (player, url = 'https://api.slothpixel.me/api/players/') => {
	const result = ky.get(`${url}${player}`);
	
	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data
}

module.exports.guildStatsByName = async (name, url = 'https://api.slothpixel.me/api/guilds/name/') => {
	const result = ky.get(`${url}${name}`);
	
	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data
}

module.exports.guildStatsByID = async (id, url = 'https://api.slothpixel.me/api/guilds/id/') => {
	const result = ky.get(`${url}${id}`);
	
	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data
}

module.exports.guildStatsByPlayer = async (player, url = 'https://api.slothpixel.me/api/guilds/') => {
	const result = ky.get(`${url}${player}`);
	
	if (!result) {
		throw new SlothpixelError("Slothpixel returned an empty response.")
	}

	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data;
}

module.exports.SlothpixelError = SlothpixelError

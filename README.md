# phoenix-slothpixel

A simplified interface for the Slothpixel API, adjusted for self-hosted instances.

[![NPM Badge](https://nodei.co/npm/phoenix-slothpixel.png)](https://npmjs.com/package/phoenix-slothpixel)

## Install

```sh
npm install phoenix-slothpixel
```

## Usage

```js
const slothpixel = require("phoenix-slothpixel");

(async () => {
	const { uuid } = await slothpixel("players/Richienb", "https://api.slothpixel.me/api");

	console.log(uuid);
	//=> "56da43a4088d4a7682b6dd431535015e"
})();
```

## API

### slothpixel(endpoint, url, options?)

#### endpoint

Type: `string`

The [API endpoint](https://docs.slothpixel.me) to call.

### url

Type: `string`

The API URL to call, defaults to api.slothpixel.me/api (if put `null`).

#### options

Type: `object`

The options to pass to the API.

### slothpixel.graphql(data)

Send a request to the Slothpixel Graphql API.

#### data

Type: `object`

The Graphql data to send. See https://graphql.org/learn/serving-over-http/#post-request.

```js
const slothpixel = require("phoenix-slothpixel");

(async () => {
	const query = `{
		players {
			player(player_name: "Richienb") {
				uuid
			}
		}
	}`;

	const data = await slothpixel.graphql({ query });

	console.log(data.players.player.uuid)
 	//=> "56da43a4088d4a7682b6dd431535015e"
})();
```

### slothpixel.SlothpixelError

Exposed for instanceof checks. This type of error is thrown when the API returns an error.

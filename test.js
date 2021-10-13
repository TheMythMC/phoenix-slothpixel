const test = require("ava")
const slothpixel = require(".")

test("main", async t => {
	const { uuid } = await slothpixel("players/Richienb")
	t.is(uuid, "56da43a4088d4a7682b6dd431535015e")
})

test("graphql", async t => {
	const query = `{
		players {
			player(player_name: "Richienb") {
				uuid
			}
		}
	}`

	const data = await slothpixel.graphql({ query })

	t.deepEqual(data, { players: { player: { uuid: "56da43a4088d4a7682b6dd431535015e" } } })
})
// test('player', async t => {
// 	const { uuid } = await slothpixel.playerStats('Mythbusters123')
// 	t.is(uuid, "2cf9d8ca459a4c5cbf8911eeef146d6f");
// })

// test('guildid', async t => {
// 	const { name } = await slothpixel.guildStatsByID("5a67bfa70cf29432ef9df6cc");
// 	t.is(name, "Intelligence Quotient");
// })

// test('guildname', async t => {
// 	const { id } = await slothpixel.guildStatsByName("Intelligence Quotient");
// 	t.is(id, "5a67bfa70cf29432ef9df6cc");
// })

// test('guildplayer', async t => {
// 	const { id } = await slothpixel.guildStatsByPlayer("Mythbusters123");
// 	t.is(id, "5a67bfa70cf29432ef9df6cc");
// })

/** An error thrown by the API. */

declare class SlothpixelError extends Error {
	message: string
}

interface GraphqlData {
	query: string
	operationName?: string
	variables?: object
}



declare const slothpixel: {
	SlothpixelError: typeof SlothpixelError

	/**
	Send a request to the Slothpixel API.
	@param endpoint The [API endpoint](https://docs.slothpixel.me) to call.
	@param options The options to pass to the API.
	@example
	```
	const slothpixel = require("slothpixel");

	(async () => {
		const { uuid } = await slothpixel("players/Richienb");

		console.log(uuid);
		//=> "56da43a4088d4a7682b6dd431535015e"
	})();
	```
	*/
	<ReturnType = object | object[]>(endpoint: string, url: string, options?: Record<string, string | number | boolean>): Promise<ReturnType>

	/**
	Send a request to the Slothpixel Graphql API.
	@param data The graphql data to send.
	@example
	```
	const slothpixel = require("slothpixel");

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
	*/
	graphql<ReturnType = object>(data: GraphqlData): Promise<ReturnType>

	/* Use these for the typings */

	playerStats<ReturnType = Player>(name: string, url?: string): Promise<ReturnType>

	guildStatsByName<ReturnType = Guild>(guildName: string, url?: string): Promise<ReturnType>

	guildStatsByID<ReturnType = Guild>(guildID: string, url?: string): Promise<ReturnType>

	guildStatsByPlayer<ReturnType = Guild>(player: string, url?: string): Promise<ReturnType>

}

export = slothpixel

interface Player {
    uuid: string,
    username: string,
    name_history: string[],
    online: true,
    rank: string,
    rank_plus_color: string,
    rank_formatted: string,
    prefix: string,
    karma: number,
    exp: number,
    level: number,
    achievement_points: number,
    quests_completed: number,
    total_kills: number,
    total_wins: number,
    total_coins: number,
    mc_version: string,
    first_login: number,
    last_login: number,
    last_logout: number,
    last_game: string,
    language: string,
    gifts_sent: number,
    gifts_received: number,
    is_contributor: true,
    rewards: {
      streak_current: number,
      streak_best: number,
      claimed: number,
      claimed_daily: number,
      tokens: number
    },
    voting: {
      votes_today: number,
      total_votes: number,
      last_vote: number
    },
    links: {
      TWITTER: string,
      YOUTUBE: string,
      INSTAGRAM: string,
      TWITCH: string,
      DISCORD: string,
      HYPIXEL: string
    },
    stats: {
      Arcade: {
        coins: number,
        blocking_dead: {
          wins: number,
          zombie_kills: number,
          headshots: number
        },
        dragonwars: {
          wins: number,
          kills: number
        },
        hypixel_says: {
          wins: number,
          rounds: number
        },
        santa_says: {
          wins: number,
          rounds: number
        },
        miniwalls: {
          wins: number,
          kills: number,
          deaths: number,
          final_kills: number,
          arrows_shot: number,
          arrows_hit: number,
          wither_damage: number,
          wither_kills: number,
          kit: string
        },
        party_games: {
          wins_1: number,
          wins_2: number,
          wins_3: number
        },
        bounty_hunters: {
          wins: number,
          kills: number,
          deaths: number,
          bounty_kills: number
        },
        galaxy_wars: {
          wins: number,
          kills: number,
          deaths: number,
          rebel_kills: number,
          shots_fired: number
        },
        farm_hunt: {
          wins: number,
          poop_collected: number
        },
        football: {
          wins: number,
          goals: number,
          powerkicks: number
        },
        creeper_attack: {
          best_wave: number
        },
        hole_in_the_wall: {
          wins: number,
          rounds: number,
          highest_score_qualification: number,
          highest_score_finals: number
        },
        zombies: {
          wins: number,
          zombie_kills: number,
          deaths: number,
          total_rounds_survived: number,
          bullets_hit: number,
          headshots: number,
          players_revived: number,
          windows_repaired: number,
          doors_opened: number,
          best_round: number
        }
      },
      Arena: {
        coins: number,
        coins_spent: number,
        hat: string,
        penalty: number,
        magical_chest: number,
        keys: number,
        selected_sword: string,
        active_rune: string,
        skills: {
          offensive: string,
          support: string,
          utility: string,
          ultimate: string
        },
        combat_levels: {
          melee: number,
          health: number,
          energy: number,
          cooldown: number
        },
        rune_levels: {
          damage: number,
          energy: number,
          slowing: number,
          speed: number
        },
        gamemodes: {
          one_v_one: {
            damage: number,
            kills: number,
            deaths: number,
            losses: number,
            wins: number,
            win_streaks: number,
            games: number,
            healed: number,
            kd: number,
            win_loss: number,
            win_percentage: number
          },
          two_v_two: {
            damage: number,
            kills: number,
            deaths: number,
            losses: number,
            wins: number,
            win_streaks: number,
            games: number,
            healed: number,
            kd: number,
            win_loss: number,
            win_percentage: number
          },
          four_v_four: {
            damage: number,
            kills: number,
            deaths: number,
            losses: number,
            wins: number,
            win_streaks: number,
            games: number,
            healed: number,
            kd: number,
            win_loss: number,
            win_percentage: number
          }
        }
      },
      Warlords: {
        coins: number,
        kills: number,
        assists: number,
        deaths: number,
        kill_death_ratio: number,
        wins: number,
        wins_capturetheflag: number,
        wins_domination: number,
        wins_teamdeathmatch: number,
        weapons_repaired: number,
        flags_captured: number,
        flags_returned: number
      },
      BedWars: {
        coins: number,
        exp: number,
        level: number,
        wins: number,
        losses: number,
        games_played: number,
        kills: number,
        deaths: number,
        k_d: number,
        w_l: number,
        beds_broken: number,
        beds_lost: number,
        bed_ratio: number,
        final_kills: number,
        final_deaths: number,
        final_k_d: number,
        void_kills: number,
        void_deaths: number,
        winstreak: number,
        boxes: {
          current: number,
          opened: number,
          commons: number,
          rares: number,
          epics: number,
          legendaries: number
        },
        resources_collected: {
          iron: number,
          gold: number,
          diamond: number,
          emerald: number
        },
        gamemodes: any,
        practice: {
          selected: string,
          bridging: any,
          records: any,
          mlg: any,
          fireball_jumping: any
        }
      },
      BuildBattle: {
        coins: number,
        score: number,
        wins: number,
        w_r: number,
        total_votes: number,
        wins_solo_normal: number,
        wins_solo_pro: number,
        wins_teams_normal: number,
        wins_guess_the_build: number,
        correct_guesses: number,
        games_played: number,
        super_votes: number,
        loadout: string[],
        selected_hat: string,
        selected_victory_dance: string,
        selected_suit: string,
        selected_movement_trail: string,
        selected_backdrop: string,
        themeRatings: any
      },
      Duels: {
        coins: number,
        wins: number,
        losses: number,
        kills: number,
        deaths: number,
        kd_ratio: number,
        win_loss_ratio: number
      },
      TKR: {
        coins: number,
        coin_pickups: number,
        laps: number,
        wins: number,
        box_pickups: number,
        bananas_sent: number,
        bananas_received: number,
        banana_ratio: number,
        trophies: {
          gold: number,
          silver: number,
          bronze: number
        },
        maps: {
          retro: {
            games: number,
            win_ratio: number,
            trophies: {
              gold: number,
              silver: number,
              bronze: number
            }
          },
          hypixelgp: {
            games: number,
            win_ratio: number,
            trophies: {
              gold: number,
              silver: number,
              bronze: number
            }
          },
          junglerush: {
            games: number,
            win_ratio: number,
            trophies: {
              gold: number,
              silver: number,
              bronze: number
            }
          },
          olympus: {
            games: number,
            win_ratio: number,
            trophies: {
              gold: number,
              silver: number,
              bronze: number
            }
          },
          canyon: {
            games: number,
            win_ratio: number,
            trophies: {
              gold: number,
              silver: number,
              bronze: number
            }
          }
        }
      },
      Blitz: {
        coins: number,
        deaths: number,
        kills: number,
        k_d: number,
        wins: number,
        team_wins: number,
        win_loss: number,
        win_percentage: number,
        weekly_kills: number,
        monthly_kills: number,
        rambo_wins: number,
        random_wins: number,
        damage_taken: number,
        taunt_kills: number,
        potions_drunk: number,
        damage: number,
        mobs_spawned: number,
        time_played: number,
        arrows_hit: number,
        games_played: number,
        potions_thrown: number,
        arrows_fired: number,
        blitz_uses: number,
        chests_opened: number,
        kits_levels: any,
        kit_stats: any,
        equipped: {
          aura: string,
          taunt: string,
          victory_dance: string,
          finisher: string
        },
        settings: {
          default_kit: string,
          auto_armor: true
        },
        inventories: any
      },
      CvC: {
        coins: number,
        deaths: number,
        kills: number,
        kd: number,
        wins: number,
        cop_kills: number,
        criminal_kills: number,
        weekly_kills: number,
        monthly_kills: number,
        bombs_planted: number,
        bombs_defused: number,
        grenade_kills: number,
        headshot_kills: number,
        round_wins: number,
        selected_lobby_prefix: string,
        shots_fired: number,
        show_lobby_prefix: true,
        map_wins: {
          alleyway: number,
          atomic: number,
          carrier: number,
          melon_factory: number,
          overgrown: number,
          reserve: number,
          sandstorm: number,
          temple: number
        },
        deathmatch: {
          kills: number,
          deaths: number,
          kd: number,
          wins: number,
          cop_kills: number,
          criminal_kills: number
        },
        perks: {
          player: {
            body_armor_cost: number,
            bounty_hunter: number,
            pocket_change: number,
            strength_training: number
          },
          carbine: {
            cost_reduction: number,
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          knife: {
            attack_delay: number,
            damage_increase: number
          },
          magnum: {
            cost_reduction: number,
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          pistol: {
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          rifle: {
            cost_reduction: number,
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          shotgun: {
            cost_reduction: number,
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          smg: {
            cost_reduction: number,
            damage_increase: number,
            recoil_reduction: number,
            reload_speed_reduction: number
          },
          sniper: {
            charge_bonus: number,
            cost_reduction: number,
            damage_increase: number,
            reload_speed_reduction: number
          }
        },
        selected_cosmetics: {
          carbine: string,
          knife: string,
          magnum: string,
          pistol: string,
          rifle: string,
          shotgun: string,
          smg: string
        }
      },
      MurderMystery: {
        coins: number,
        wins: number,
        games_played: number,
        win_loss_ratio: number,
        kills: number,
        deaths: number,
        kill_death_ratio: number,
        times_hero: number,
        boxes: {
          current: number,
          opened: number,
          commons: number,
          rares: number,
          epics: number,
          legendaries: number
        }
      },
      Pit: {
        profile: {
          outgoing_offers: [],
          contract_choices: [],
          last_save: number,
          hat_color: number,
          trade_timestamps: [
            number
          ],
          impatient_enabled: true,
          inv_enderchest: {
            type: number,
            data: [
              number
            ]
          },
          inv_contents: {
            type: number,
            data: [
              number
            ]
          },
          inv_armor: {
            type: number,
            data: [
              number
            ]
          },
          item_stash: {
            type: number,
            data: [
              number
            ]
          },
          mystic_well_item: {
            type: number,
            data: [
              number
            ]
          },
          mystic_well_pants: {
            type: number,
            data: [
              number
            ]
          },
          death_recaps: {
            type: number,
            data: [
              number
            ]
          },
          cash: number,
          leaderboard_stats: any,
          genesis_spawn_in_base: true,
          selected_perk_number: string,
          selected_perk_1: string,
          selected_perk_2: string,
          selected_perk_3: string,
          last_contract: number,
          ended_contracts: [
            {
              difficulty: string,
              gold_reward: number,
              requirements: any,
              progress: any,
              chunk_of_viles_reward: number,
              completion_date: number,
              remaining_ticks: number,
              key: string
            }
          ],
          gold_transactions: [
            {
              amount: number,
              timestamp: number
            }
          ],
          renown: number,
          hat_enabled: true,
          genesis_points: number,
          drop_confirm_disabled: true,
          prestiges: [
            {
              index: number,
              xp_on_prestige: number,
              timestamp: number
            }
          ],
          zero_point_three_gold_transfer: true,
          renown_unlocks: [
            {
              tier: number,
              acquireDate: number,
              key: string
            }
          ],
          selected_launch_trail: string,
          selected_leaderboard: string,
          last_midfight_disconnect: number,
          genesis_allegiance_time: number,
          genesis_weekly_perks_claim_item_demon: number,
          login_messages: [],
          hotbar_favorites: [
            number
          ],
          reconessence_day: number,
          chat_option_player_chat: true,
          chat_option_misc: true,
          chat_option_bounties: true,
          chat_option_prestige_announcements: true,
          chat_option_streaks: true,
          chat_option_kill_feed: true,
          apollo_enabled: true,
          zero_point_two_xp: number,
          last_lycanthropy: number,
          recent_kills: [
            {
              victim: string,
              timestamp: number
            }
          ],
          xp: number,
          bounties: [
            {
              amount: number,
              timestamp: number,
              remainingTicks: number,
              issuer: string
            }
          ],
          night_quests_enabled: true,
          genesis_allegiance: string,
          cash_during_prestige_number: number,
          cash_during_prestige_1: number,
          unlocks: [
            {
              tier: number,
              acquireDate: number,
              key: string
            }
          ],
          unlocks_1: [
            {
              tier: number,
              acquireDate: number,
              key: string
            }
          ]
        },
        stats_move_1: number,
        restored_inv_backup_1: number,
        pit_stats_ptl: {
          gapple_eaten: number,
          enderchest_opened: number,
          fishing_rod_launched: number,
          blocks_placed: number,
          cash_earned: number,
          launched_by_launchers: number,
          arrows_fired: number,
          enchanted_tier2: number,
          playtime_minutes: number,
          enchanted_tier1: number,
          chat_messages: number,
          bow_damage_received: number,
          enchanted_tier3: number,
          kills: number,
          diamond_items_purchased: number,
          deaths: number,
          soups_drank: number,
          ghead_eaten: number,
          sword_hits: number,
          joins: number,
          bow_damage_dealt: number,
          contracts_started: number,
          damage_received: number,
          jumped_into_pit: number,
          melee_damage_received: number,
          left_clicks: number,
          arrow_hits: number,
          damage_dealt: number,
          assists: number,
          lava_bucket_emptied: number,
          max_streak: number,
          sewer_treasures_found: number,
          night_quests_completed: number,
          wheat_farmed: number,
          dark_pants_crated: number,
          dark_pants_t2: number,
          hidden_jewel_triggers: number,
          king_quest_completion: number,
          gold_from_farming: number,
          fished_anything: number,
          fishes_fished: number,
          gold_from_selling_fish: number
        }
      },
      Smash: {
        coins: number,
        kills: number,
        deaths: number,
        smash_level: number,
        kd: number,
        wins: number,
        losses: number,
        quits: number,
        win_streak: number,
        wl: number,
        games_played: number,
        weekly_kills: number,
        weekly_wins: number,
        weekly_losses: number,
        weekly_games_played: number,
        monthly_kills: number,
        monthly_wins: number,
        monthly_losses: number,
        monthly_games_played: number
      },
      SkyWars: {
        coins: number,
        wins: number,
        losses: number,
        win_loss_ratio: number,
        skywars_experience: number,
        level: number,
        kills: number,
        deaths: number,
        assists: number,
        kill_death_ratio: number,
        souls_gathered: number,
        souls: number,
        arrows_shot: number,
        arrows_hit: number,
        arrow_hit_miss_ratio: number,
        eggs_thrown: number,
        enderpearls_thrown: number,
        blocks_placed: number,
        blocks_broken: number,
        soul_well_uses: number,
        soul_well_rares: number,
        soul_well_legendaries: number
      },
      TNT: {
        coins: number,
        gamemodes: {
          tnt_run: {
            wins: number,
            losses: number,
            win_loss_ratio: number,
            record_time_survived: number
          },
          pvp_run: {
            wins: number,
            losses: number,
            win_loss_ratio: number,
            kills: number,
            record_time_survived: number
          },
          tnt_tag: {
            kills: number,
            wins: number
          },
          bow_spleef: {
            wins: number,
            losses: number,
            win_loss_ratio: number
          },
          wizards: {
            wins: number,
            kills: number,
            deaths: number,
            assists: number,
            kill_death_ratio: number
          }
        }
      },
      MegaWalls: {
        coins: number,
        kills: number,
        assists: number,
        deaths: number,
        kill_death_ratio: number,
        final_kills: number,
        final_assists: number,
        final_deaths: number,
        final_kill_death_ratio: number,
        wins: number,
        losses: number,
        win_loss_ratio: number,
        wither_damage: number,
        defending_kills: number
      }
    }
  }

interface Guild {
    name: string,
    id: string,
    created: string,
    joinable: boolean,
    public: boolean,
    tag: string,
    tag_color: string,
    tag_formatted: string,
    legacy_ranking: number,
    exp: number,
    level: number,
    exp_by_game: {
        REPLAY: number,
        UHC: number,
        Paintball: number,
        BedWars: number,
        MegaWalls: number,
        Blitz: number,
        Warlords: number,
        Skyblock: number,
        VampireZ: number,
        BuildBattle: number,
        Housing: number,
        TNT: number,
        Duels: number,
        Pit: number,
        Walls: number,
        Arena: number,
        SkyWars: number,
        CvC: number,
        MurderMystery: number,
        Prototype: number,
        Arcade: number,
        Quake: number,
        SpeedUHC:number,
        TKR: number,
        Smash: number,
        Classic: number
    },
    exp_history: any,
    description: string,
    prefferred_games: string[],
    ranks: {
		name: string,
		default: boolean,
		tag: string,
		created: number,
		priority: number
	}[],
    members: {
		uuid: string,
    rank: string,
    joined: number,
    quest_participation: number,
    exp_history: any,
    muted_till: number
	}[]
}
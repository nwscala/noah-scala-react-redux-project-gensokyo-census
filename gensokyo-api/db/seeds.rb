# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# hina = Character.create(
#     name: "Hina Kagiyama",
#     title: "Nagashi-bina of the Hidden God",
#     species: "Pestilence God",
#     abilities: "Stockpiling misfortune",
#     occupation: "Chasing away lost humans, gathering the misfortune of humans",
#     location: "The Great Youkai Forest, near a river"
# )

# mof = Game.create(
#     name: "Mountain of Faith",
#     developer: "Team Shanghai Alice",
#     publisher: "Team Shanghai Alice",
#     release_date: "August 17, 2007",
#     story: "It is autumn in Gensokyo. A stranger comes to the Hakurei Shrine and says that the shrine should close for good. Reimu Hakurei won't let it happen so she or Marisa Kirisame goes to investigate the situation.

#     The heroine goes to the Youkai Mountain where she meets three gods and eventually Nitori Kawashiro, who says the kappa are troubled by a new god on the mountain. As she advances further, the heroine meets Aya Shameimaru, who was told to investigate the intruder. Aya is beaten and the heroine moves to the Moriya Shrine. Sanae Kochiya says that the new god, later shown to be Kanako Yasaka, is trying to collect faith. After Sanae is defeated, Kanako appears and explains her motives. She eventually makes peace with the kappa and tengu, who, in return, accept Kanako as the new god of the mountain, supplying her with faith.
    
#     In the Extra stage, the heroines meet the other god of the Moriya Shrine, Suwako Moriya, who is the shrine's true god. Suwako demands that they play with her in a danmaku battle, just like they've played with Sanae and Kanako.",
#     genre: "Vertical Danmaku Shooting Game"
# )

Appearance.create(
    character_id: Character.first.id,
    game_id: Game.first.id,
    playable: false,
    stage: "Stage 2 Boss"
)

# Spellcard.create([{
#     name: 'Wound Sign "Pain Flow"',
#     notes: "Near the river that flows down from the mountain",
#     star_level_name: "Reference Level",
#     star_level: "Too unlucky to reference",
#     marisa_comments: "Ripples of pain. She likes to save up bad omens in her body, and just by getting close to her, it feels like the misfortune will cycle over to you.
#     This Spell Card uses her specialty well; she just has to spin around in the water, and the water becomes a prickly mess. I can't copy this, and I sure as heck don't want to.",
#     character_id: hina.id
# }, {
#     name: 'Flawed Sign "Broken Amulet"',
#     notes: "Near the river that flows down from the mountain",
#     star_level_name: "Recycle Level",
#     star_level: "4 stars",
#     marisa_comments: "Danmaku that just throws broken amulets. Since they're broken, they fall apart immediately, and their fragments fall irregularly in this Spell Card.
#     I really don't wanna get hit by one. It's bad luck.
#     I bet Reimu would do fine against this, though. She's got way more amulets than Hina, and they aren't broken. They do have 'full house' (大入) written on them, though.",
#     character_id: hina.id
# }])
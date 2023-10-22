export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/954502826791428136/codeshare_logo.png",
      name: "Code Share",
      description: "Discord türkiyenin en büyük discord bot komutları arşivi ve en büyük discord botu uptime, hostlayıcı websitesi. Code Share veritabanında discord botlarına özgü yüzlerce discord bot komutu bulunmaktadır ve kendi discord botunuzu yaratmanıza yardımcı olur.",
      link: "https://codeshare.me",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/994700975522730125/1101630943640428564/Spotify_icon.svg.png",
      name: "Spotify",
      description: "I create playlists occasionally on my personal Spotify account.",
      link: "https://sptfy.com/albayrakxel",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/1005003050928312380/1165585266589835324/minecraft-mods.png",
      name: "Mod Paketi",
      description: "1.12.2 Sürümüne uygun minecraft mod paketi.",
      link: "https://hozpinar419.vercel.app/download",
    }
  ];
  res.status(200).json(data);
};

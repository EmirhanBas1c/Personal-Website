export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/1005003050928312380/1187435449208283256/C33HqYgilwnqGsoPlEh_WzAlZIF2YrAkkdef_YEsILWbxGIG4UCzNTxF7iq9bzdxPw.png?ex=6596e070&is=65846b70&hm=f9138e262c526a10b1d5efa3bd0c9e079a1129f99e265f87f54439316b3d83e7&=&format=webp&quality=lossless",
      name: "Sunu PDF Dosyası",
      description: "",
      link: "https://drive.google.com/file/d/1KKdvkS6SmOVjLY8dptwiW6mGuH6pZBgD/view?usp=sharing",
    }
  ];
  res.status(200).json(data);
};

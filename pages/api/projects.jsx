export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/954502826791428136/codeshare_logo.png",
      name: "Sunu PDF Dosyası",
      description: ".",
      link: "https://drive.google.com/file/d/1KKdvkS6SmOVjLY8dptwiW6mGuH6pZBgD/view?usp=sharing",
    }
  ];
  res.status(200).json(data);
};

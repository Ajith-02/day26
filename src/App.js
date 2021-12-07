import './App.css';

function App() {
  const name = [
    {
      name: "Ajith",
      pic: "https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg"
    },

    {
      name: "Aravind",
      pic: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/03/butterfly_gardens_20090219_085.jpg?resize=600%2C400&ssl=1"
    },
    {
      name: "Sarathy",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flower_July_2011-2_1_cropped.jpg/1200px-Flower_July_2011-2_1_cropped.jpg"
    },
    {
      name: "Krishnan",
      pic: "https://www.apogeephoto.com/wp-content/uploads/2016/06/flowers_Part1LeadPhoto.jpg"
    }
  ];
  return (
    <div className="App">
      {name.map((ur) => (<Msg name={ur.name} pic={ur.pic} />))}
    </div>
  );
}

function Msg({ name, pic }) {
  //const name = "Ajith"
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1 className="user-name" >{name}</h1>
    </div>
  );
}

export default App;

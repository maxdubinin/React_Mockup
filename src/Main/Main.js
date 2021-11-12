import Slider from "./Slider";
import Movies from "./Movies";

import banner from "../img/banner_1.jpg";

const slide = [
    {textBold: 'Welcome to MovieCollection website', 
    text: 'which is run by the friends of MovieCollection',
    id: 1
    },
    {textBold: 'Welcome to MovieCollection website', 
    text: 'which is run by the friends of MovieCollection',
    id: 2
    },
    {textBold: 'Welcome to MovieCollection website', 
    text: 'which is run by the friends of MovieCollection',
    id: 3
    }
];



const Main = () => {


  return (
    <main >
      <Slider banner={banner} slideData={slide}/>
      <Movies/>
      
    </main>
  );
}

export default Main;
//import Header from "./Header/Header";
import SliderItem from "./Slider-item";

const Slider = ({banner, slideData}) => {
    const elements = slideData.map((item) => {
        const {id,  ...rest } = item;
        return (
          <SliderItem {...rest} banner={banner} key={id}/>
        );
      });  
  return (
    <section className="slider">
        {elements}
    </section>
  );
}

export default Slider;
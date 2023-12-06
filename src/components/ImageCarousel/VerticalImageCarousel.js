import caseOne from '../../assets/case1.svg'
import caseTwo from '../../assets/case2.svg'
import caseThree from '../../assets/case3.svg'


const Data = [
  {
    id: 1,
    image: caseOne,
    title: "Talent management development",
    description: "Design direction, Ux Ui design",
  },
  {
    id: 2,
    image: caseTwo,
    title: "Talent management development",
    description: "Design direction, Ux Ui design",
  },
  {
    id: 3,
    image: caseThree,
    title: "Talent management development",
    description: "Design direction, Ux Ui design",
  },
];

function ImageCarousel() {
  return (
    <div className="caseContainer">
      {Data.map(({ id, image, title, description }) => {
        return (
          <div key={id} className="caseBox">
            <img src={image} alt="case"/>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ImageCarousel;

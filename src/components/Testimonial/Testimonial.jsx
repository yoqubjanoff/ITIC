import { Container } from "./styles";
import testimonial1 from "../../assets/testimonial1.svg";
import testimonial2 from "../../assets/testimonial2.svg";
import testimonial3 from "../../assets/testimonial3.svg";
import testimonial4 from "../../assets/testimonial4.svg";
const Data = [
  {
    id: 1,
    image: testimonial1,
    tName: "G'olib Jamolov",
    companyName: "Najot Ta'lim",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 2,
    image: testimonial2,
    tName: "Otabek Orziyev",
    companyName: "PDP University",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 3,
    image: testimonial3,
    tName: "Sherzod Jabborov",
    companyName: "Acharya University",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 4,
    image: testimonial4,
    tName: "Durbek Asadov",
    companyName: "Uzum",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
];

function Testimonial() {
  return(
    <div>
        {Data.map(({id, image, tName, compName, comment}) => {
            return(
                <Container key={id}>
                    
                </Container>
            )
        })}
    </div>
  )
}

export default Testimonial;

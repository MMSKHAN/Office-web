import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPart4() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="part4container">
        <div className="cardpart4"data-aos="zoom-in-up">
            <h1>Who we are</h1>
            <p className='card4text' >We are itZoon. We word class services providers. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veniam temporibus facere, illo doloribus earum quam sint asperiores quae nostrum sunt vel tempore autem libero amet soluta ea reiciendis quaerat.
            Officiis, in ducimus vero veritatis ipsam qui. Dolores accusamus repellendus quod quibusdam, ipsum laborum delectus voluptate nostrum dicta tenetur, quae quis eius reprehenderit sunt accusantium eos dignissimos, veritatis dolore iusto!
            
                     </p>
                     <p >CEO : <b>Junaid iqbal </b></p>
        </div>
    </div>
  )
}

export default AboutPart4
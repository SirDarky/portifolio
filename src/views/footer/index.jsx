import Wt from '../../assets/img/footer/wth.png';
import Git from '../../assets/img/footer/git.png';
import Lin from '../../assets/img/footer/lin.png';
import Be from '../../assets/img/footer/be.png';
import '../../styles/textStyle.css';
import './style.scss';

const Footer = () => {
  return (
    <div className="flex-container" id="footer">
      <div className="inner-container">
        <div className="text-copyright roboto">Copyright © 2024</div>
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send?phone=5592986063355&text=Meu%20Whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Wt} alt="" />
          </a>
          <a
            href="https://github.com/SirDarky"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-vinicius-araujo-silva/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Lin} alt="" />
          </a>
        </div>
      </div>
      <div className="text-name text">Marcus Vinicius</div>
    </div>
  );
};

export default Footer;

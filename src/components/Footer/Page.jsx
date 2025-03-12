import {
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTiktok,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoPinterest,
} from "react-icons/bi";

function Waves() {
  return (
    <>
      <footer>
        <p className="copy">
          Hotmart - 2011-2025 © Todos os direitos reservados
        </p>

        <div className="links">
          <a target="_black" href="https://www.instagram.com/hotmart/">
            <BiLogoInstagram />
          </a>
          <a target="_black" href="https://www.youtube.com/hotmart">
            <BiLogoYoutube />
          </a>
          <a target="_black" href="https://www.tiktok.com/@hotmart">
            <BiLogoTiktok />
          </a>
          <a target="_black" href="https://www.linkedin.com/company/hotmart/">
            <BiLogoLinkedin />
          </a>
          <a target="_black" href="https://x.com/hotmart">
            <BiLogoTwitter />
          </a>
          <a target="_black" href="https://www.facebook.com/hotmartofficial">
            <BiLogoFacebook />
          </a>
          <a target="_black" href="https://br.pinterest.com/hotmartofficial/">
            <BiLogoPinterest />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Waves;


import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from "../../images/logo.png";
import "./Footer.css"
function FooterComp() {
  return (
    <div>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:justify-between"id="footer-infos">
            <FooterBrand 
              href="#"
              src={logo}
              alt="CEFIT Logo"
              
              className="logo"
              
            />
            <FooterLinkGroup>
              <FooterLink  style={{ color: 'white' }} id="footer-link" href="#">Sobre</FooterLink>
              <FooterLink  style={{ color: 'white' }} id="footer-link" href="https://github.com/dsm-cefet-rj/ti-2024-1-grupo-um">Github</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterLinkGroup>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="https://github.com/accoelhos">Ana Carolina</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="https://github.com/caiosantosdev">Caio Santos</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="https://github.com/luizhgdantas">Luiz Dantas</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="https://github.com/niviciuzdrm">Vinicius Drumond</FooterLink>
          </FooterLinkGroup>
          <FooterCopyright style={{ color: 'white' }} href="#" by ="" year={2024} />
        </div>
      </Footer>
    </div>
  );
}
export default FooterComp
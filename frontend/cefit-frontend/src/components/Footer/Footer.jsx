
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from "../../images/logo.png";
import "./Footer.css"
function FooterComp() {
  return (
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
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="#">About</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="#">Privacy Policy</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="#">Licensing</FooterLink>
            <FooterLink  style={{ color: 'white' }} id="footer-link" href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright style={{ color: 'white' }} href="#" by =" CEFIT™ " year={2024} />
      </div>
    </Footer>
  );
}
export default FooterComp

import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from "./logo.png";
import "./Footer.css"
function FooterComp() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:justify-between">
          <FooterBrand 
            href="#"
            src={null}
            alt="CEFIT Logo"
            name="CEFIT"
            className="logo"
          />
          <FooterLinkGroup>
            <FooterLink  style={{ color: 'white' }} href="#">About</FooterLink>
            <FooterLink  style={{ color: 'white' }} href="#">Privacy Policy</FooterLink>
            <FooterLink  style={{ color: 'white' }} href="#">Licensing</FooterLink>
            <FooterLink  style={{ color: 'white' }} href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright style={{ color: 'white' }} href="#" by =" CEFIT™ " year={2024} />
      </div>
    </Footer>
  );
}
export default FooterComp
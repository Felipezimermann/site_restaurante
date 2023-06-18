/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import "@fontsource/roboto/400.css";
import { use } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  return (
    <section
      style={{
        background: "#fbf6d6",
        height: "100px",
        display: "flex",
        padding: "0px 17px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "10px" }}>
        <img
          style={{ height: "100px", width: "170px" }}
          src="/logo_bomprato_azul-01-300x187.png"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button
                  color="inherit"
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Menu
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <Link href="/">
                    {" "}
                    <MenuItem onClick={popupState.close}>
                      Segunda a sexta
                    </MenuItem>
                  </Link>

                  <Link href="/cadastroProduto">
                    <MenuItem onClick={popupState.close}>
                      Cadastrar Produto
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </PopupState>
        </div>
      </div>
    </section>
  );
}

export default Header;

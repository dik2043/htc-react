import React from "react";

import "./footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper footer__wrapper">
                <img className="footer__img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMyA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjAwMSAxLjE4NEMzMi4wNjU0IDAuNjA4IDMyLjAwMSAwLjY3MiAzMS43NzU3IDAuMTZDMzEuNzExMyAwLjA2NCAzMS42MTQ3IDAgMzEuNDg1OSAwQzMxLjEzMTggMCAzMC41NTIzIDAuNDQ4IDMwLjIzMDQgMC44QzI4LjA0MTIgMy4yMzIgMjUuMzY5MiA3LjMyOCAyMy45NTI3IDcuODA4QzIzLjI0NDUgOC4wNjQgMjIuNTY4NCA2LjgxNiAyMi4wODU1IDYuMzY4QzIwLjE1MzkgNC40OCAxNy42NzUxIDIuMzY4IDEzLjY1MDkgMS4xMkMxMS41MjYyIDAuNDE2IDkuNzIzMzQgLTAuMTkyIDkuMDQ3MjkgMC4xMjhDNy43OTE3NSAwLjcwNCA5LjU5NDU3IDEuODU2IDEwLjMwMjggMi42MjRDMTAuODUwMSAzLjIgMTEuNDYxOCAzLjEzNiAxMi4xMDU2IDIuODQ4QzEyLjU4ODUgMi42NTYgMTMuMTY4IDIuNjU2IDEzLjY1MDkgMi44NDhDMTcuMjg4NyA0LjMyIDE5LjM0OTEgNS43MjggMjEuNDQxNyA3Ljk2OEMyMi4xMTc3IDguNzM2IDIyLjUzNjIgOS42OTYgMjEuODkyNCAxMC4zMDRDMTkuNzM1NCAxMi4zODQgMTcuNDgxOSAxNC41OTIgMTUuMzU3MSAxNi43MDRDMTQuODc0MiAxNy4xODQgMTQuMjk0OCAxNy44MjQgMTMuNjgzMSAxNy43OTJDMTMuMjk2OCAxNy43NiAxMi42ODUxIDE3LjM0NCAxMi4zMzEgMTcuMTJDMTEuNzE5MyAxNi43MDQgMTEuMTcyIDE2LjQ4IDEwLjU5MjYgMTYuMDMyQzEwLjA3NzUgMTUuNjQ4IDkuOTgwODkgMTUuMjk2IDkuOTQ4NyAxNC42NTZDOS45MTY1IDEzLjYgMTAuMTc0IDEyLjcwNCAxMC4zMzUgMTEuOTA0QzEwLjU5MjYgMTAuNDY0IDEwLjkxNDUgOS4wMjQgMTEuMjA0MiA3LjU1MkMxMS40Mjk2IDYuNDMyIDExLjU1ODQgNC45OTIgMTEuNDYxOCAzLjgwOEMxMS4zNjUyIDMuNTIgMTAuODgyMyAzLjQ1NiAxMC41NjA0IDMuNjhDMTAuNDMxNiA0LjI4OCAxMC40MzE2IDQuMjg4IDEwLjMwMjggNC45MjhDMTAuMTc0IDUuNiAxMC4wNDUzIDYuODE2IDkuOTE2NSA3LjQ4OEM5LjUzMDE4IDkuNiA5LjAxNTA5IDExLjIgOC42NjA5NyAxMy45NTJDOC41OTY1OCAxNC4zNjggOC41IDE1LjA3MiA4LjQzNTYyIDE1LjU4NEM4LjM3MTIzIDE2LjI4OCA4LjU5NjU4IDE3LjE1MiA4LjM3MTIzIDE3LjZDOC4wODE0OSAxOC4yNCA3LjgyMzk1IDE4Ljc1MiA3Ljk4NDkxIDE5LjYxNkM4LjExMzY5IDIwLjQ0OCA3LjkyMDUzIDIwLjY3MiA3LjQwNTQ0IDIxLjA4OEM2LjY2NDk5IDIxLjY5NiA1LjAyMzE0IDIyLjkxMiA0LjA4OTU0IDIzLjQ1NkMzLjU3NDQ1IDIzLjc3NiAyLjkzMDU5IDI0LjM4NCAzLjMxNjkxIDI1LjAyNEMzLjY3MTAzIDI1LjY2NCA0LjQ3NTg2IDI1Ljc5MiA1LjE4NDExIDI1LjgyNEM2LjI3ODY4IDI1Ljg4OCA3LjY2Mjk4IDI0LjQ4IDguNzI1MzYgMjQuMjU2QzkuMTQzODcgMjQuMTYgOS43MjMzNCAyNCAxMC4wNzc1IDI0LjI4OEMxMC41MjgyIDI0LjYwOCAxMC42MjQ4IDI1LjEyIDEwLjcyMTMgMjUuNjMyQzExLjEzOTggMjcuNTUyIDExLjAxMTEgMjguNTQ0IDEwLjg4MjMgMzAuNTkyQzEwLjc4NTcgMzEuODA4IDEwLjQ5NiAzNC4wMTYgMTAuMDc3NSAzNS4xNjhDOS43NTU1NCAzNi4wNjQgOS40MzM2MSAzNi40NDggOC42OTMxNiAzNy4wODhDOC4wMTcxMSAzNy42NjQgNy4yMTIyOCAzOC40NjQgNi45ODY5MyAzOS44NzJDNi44OTAzNSA0MC41NDQgNy4zNDEwNSA0Mi4xNDQgNi42MzI4IDQzLjk2OEM1Ljk1Njc0IDQ1LjY5NiA1Ljg2MDE3IDQ2LjA4IDUuMTUxOTIgNDcuNzEyQzQuNzk3NzkgNDguNTQ0IDQuNDQzNjcgNDkuNTY4IDQuMDU3MzUgNTAuNTkyQzMuMzgxMjkgNTIuMzg0IDMuMjg0NzEgNTIuMjU2IDIuNzM3NDMgNTQuMDhDMi40NDc2OSA1NS4wNzIgMS45OTY5OSA1Ni41MTIgMS43MDcyNSA1Ny41MDRDMS4xOTIxNiA1OS4xMzYgMS4zODUzMiA1OS4wNCAwLjU4MDQ4OCA2MC43MDRDMC4zNTUxMzYgNjEuMTIgLTAuMjU2NTM0IDYyLjQzMiAwLjE5NDE3IDYzLjI2NEMwLjM4NzMyOSA2My42MTYgMC45MDI0MiA2NCAxLjI4ODc0IDY0QzEuMzIwOTMgNjQgMS4zNTMxMiA2NCAxLjM4NTMyIDY0QzIuMTkwMTUgNjMuODA4IDIuODAxODIgNjMuNTIgMy4xODgxMyA2Mi43MkMzLjU0MjI2IDYxLjk4NCAzLjM0OTEgNjAuOTI4IDMuNjA2NjQgNjAuMTZDNC4xODYxMiA1OC40IDQuNzY1NiA1Ni42MDggNS41MzgyMyA1NC45MTJDNi4zNzUyNiA1My4wODggNi4yNzg2OCA1Mi4zODQgNy4wMTkxMiA1MC40NjRDNy44MjM5NSA0OC4yODggOC4zNzEyMyA0Ni45NDQgOS41MzAxOCA0NC45NkMxMC45MTQ1IDQyLjYyNCAxNC41MjAxIDM5LjQ1NiAxNi4wNjU0IDM4LjMzNkMxOC40Nzk5IDM2LjY0IDE5Ljk5MyAzNS41MiAxOS42NzEgMzcuNDcyQzE5LjQxMzUgMzkuMTM2IDE2LjU4MDUgNDMuMjk2IDE1Ljk2ODggNDQuNjcyQzE1LjY0NjkgNDUuMzQ0IDE1LjYxNDcgNDYuMDQ4IDE1LjkwNDQgNDYuNjI0QzE2LjI1ODYgNDcuMzYgMTcuMDYzNCA0OC4zNTIgMTcuODY4MiA0OC4yODhDMTguNjA4NyA0OC4yNTYgMTkuMjUyNSA0Ny4yNjQgMTkuMDI3MiA0Ni41NkMxOC43Mzc0IDQ1LjY5NiAxOC43MDUyIDQ1LjA1NiAxOS43Njc2IDQzLjAwOEMyMS4wODc1IDQwLjQ4IDIzLjE4MDEgMzYuODY0IDIyLjc5MzggMzMuNjk2QzIyLjY2NSAzMi41NDQgMjEuMjgwNyAzMS45NjggMjAuMTUzOSAzMi4zNTJDMTguODY2MiAzMi44IDE2Ljc0MTUgMzQuNDk2IDE1LjQyMTUgMzUuMkMxNC41MjAxIDM1LjY4IDEzLjg3NjMgMzUuODcyIDEzLjc3OTcgMzQuOTEyQzEzLjY4MzEgMzQuMDE2IDEzLjg3NjMgMzIuOTYgMTMuOTQwNiAzMi4wMzJDMTQuMjMwNCAyOC43MzYgMTQuMDM3MiAyNy41NTIgMTQuMzU5MiAyNC42NEMxNC40NTU3IDIzLjgwOCAxNS4yOTI4IDIyLjY4OCAxNi4wMDEgMjMuMzI4QzE4LjI1NDUgMjUuMzEyIDIxLjE1MTkgMjcuNjE2IDIzLjQwNTQgMjkuNDA4QzI0LjMzOSAzMC4xNDQgMjQuNzU3NSAzMC43ODQgMjUuMjA4MyAzMi4wOTZDMjUuNDMzNiAzMi43MzYgMjUuMjQwNCAzMy42OTYgMjUuMDE1MSAzNC41OTJDMjQuOTE4NSAzNS4wMDggMjUuMTExNyAzNS42MTYgMjYuMDEzMSAzNS4wMDhDMjguMTA1NiAzMi4xOTIgMjkuNTIyMSAyNy42MTYgMjkuNTIyMSAyNC4wNjRDMjkuNTU0MyAyMC45MjggMjkuOTA4NCAxNy41MzYgMjYuNTI4MiAxMi4wMzJDMjUuOTgwOSAxMS4xMzYgMjQuNjkzMiA5LjE1MiAyNS45NDg3IDcuODRDMjcuNzE5MyA1LjkyIDMxLjIyODQgMi42ODggMzIuMDAxIDEuMTg0Wk0yNy43NTE1IDIwLjQ4QzI3Ljg0ODEgMjEuNjk2IDI3Ljg4MDMgMjIuNjI0IDI3Ljg4MDMgMjMuODRDMjcuODgwMyAyNC42NCAyNy41OTA1IDI1LjYzMiAyNy40Mjk2IDI2LjcyQzI3LjMzMyAyNy40NTYgMjcuMjY4NiAyOC41MTIgMjYuOTE0NSAyOS41NjhDMjYuODUwMSAyOS43MjggMjYuNjU2OSAzMC4yMDggMjYuMzAyOCAzMC4yMDhDMjUuOTE2NSAzMC4yNCAyNS43ODc3IDI5LjcyOCAyNS41OTQ2IDI5LjUwNEMyNC45MTg1IDI4LjczNiAyNC4zNzEyIDI4IDIzLjYzMDggMjcuMzkyQzIyLjkyMjUgMjYuODQ4IDIxLjczMTQgMjYuMDE2IDIwLjk1ODggMjUuNTM2QzIwLjI1MDUgMjUuMDU2IDE5LjUxMDEgMjQuMjU2IDE4LjgwMTggMjMuNzQ0QzE4LjA2MTQgMjMuMiAxNy4zODUzIDIyLjY4OCAxNi43MDkzIDIyLjA0OEMxNi41MTYxIDIxLjg4OCAxNi4yOTA3IDIxLjYgMTYuMTk0MiAyMS40MDhDMTYuMDMzMiAyMS4wMjQgMTYuMDMzMiAyMC41NDQgMTYuMTYyIDIwLjE5MkMxNi4zMjI5IDE5LjY0OCAxNi42NzcxIDE5LjE2OCAxNi45OTkgMTguNjg4QzE3LjQxNzUgMTguMDggMTcuODY4MiAxNy41MDQgMTguMzUxMSAxNi45NkMxOC42NDA4IDE2LjY0IDE5LjEyMzcgMTYuMTkyIDE5LjQ3NzkgMTUuOTY4QzIwLjAyNTIgMTUuNjQ4IDIwLjI1MDUgMTUuNTUyIDIwLjcwMTIgMTUuMTA0QzIxLjE1MTkgMTQuNjg4IDIxLjExOTcgMTQuMjcyIDIxLjU3MDQgMTMuODI0QzIyLjAyMTEgMTMuMzc2IDIyLjU2ODQgMTIuNTEyIDIzLjExNTcgMTIuMTI4QzIzLjM0MSAxMS45NjggMjMuNzI3NCAxMS44MDggMjMuOTg0OSAxMS45MzZDMjQuMzM5IDEyLjA2NCAyNC42OTMyIDEyLjUxMiAyNC44ODYzIDEyLjgzMkMyNi4zNjcyIDE1LjQ1NiAyNy41MjYyIDE3LjYzMiAyNy43NTE1IDIwLjQ4WiIgZmlsbD0iIzFGNDc2NiIvPjwvc3ZnPg==" width={32} height={64} alt="footer-logo" />
                <div className="footer__contacts">
                    <p className="footer__address">
                        426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК&nbsp;«Металлург»)
                    </p>
                    <div className="footer__tel-container">
                        <a className="footer__tel-link" href="tel:+73412938861">+7 (3412) 93-88-61</a>
                        ,
                        <a className="footer__tel-link" href="tel:+73412432929"> 43-29-29</a>
                    </div>
                    <a className="footer__base-link" href="https://htc-cs.ru" target="_blank" rel="noopener noreferrer">htc-cs.ru</a>
                </div>
            </div>
        </footer>
    )
};


export default Footer;
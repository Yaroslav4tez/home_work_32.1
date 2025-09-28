import React from "react";
//img
import dyplomFront from "../img/dyplomFront.jpg";
import dyplomBack from "../img/dyplomBack.jpg";
import hw14 from "../img/homeWorkImg/14.1.png";
import hw20 from "../img/homeWorkImg/20.1.png";
import hw22 from "../img/homeWorkImg/22.1.png";
import hw23 from "../img/homeWorkImg/23.1.png";
import hw24 from "../img/homeWorkImg/24.1.png";
import hw26 from "../img/homeWorkImg/26.1.png";
import hw27 from "../img/homeWorkImg/27.1.png";
import hw29 from "../img/homeWorkImg/29.1.png";
import myPhoto from "../img/myFoto.jpg";
import GitIcon from "../img/github-mark.svg"
//MUI
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//style
import './forMain.scss';


const itemData = [
  {
    img: hw14,
    title: 'Slider',
    name: 'work_14.1',
    rows: 2,
    cols: 2,
    featured: true,
    http: "https://github.com/Yaroslav4tez/home_work_14.1"
  },
  {
    img: hw20,
    title: 'TODO, Jquery, Bootstrap',
    name: 'work_20.1',
    http: "https://github.com/Yaroslav4tez/home_work_20.1"
  },
  {
    img: hw22,
    title: 'Webpack',
    name: 'work_22.1',
    http: "https://github.com/Yaroslav4tez/home_work_22.1"
  },
  {
    img: hw23,
    title: 'API for Todo',
    name: 'work_23.1',
    cols: 2,
    http: "https://github.com/Yaroslav4tez/home_work_23.1"
  },
  {
    img: hw24,
    title: 'React App',
    name: 'work_24.1',
    cols: 2,
    http: "https://github.com/Yaroslav4tez/home_work_24.1"
  },
  {
    img: hw26,
    title: 'Function component',
    name: 'work_26.1',
    rows: 2,
    cols: 2,
    featured: true,
    http: "https://github.com/Yaroslav4tez/home_work_26.1"
  },
  {
    img: hw27,
    title: 'SPA App',
    name: 'work_27.1',
    http: "https://github.com/Yaroslav4tez/home_work_27.1"
  },
  {
    img: hw29,
    title: 'TODO list with redux',
    name: 'work_29.1',
    http: "https://github.com/Yaroslav4tez/home_work_29.1"
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData( icon, text, href, description) {
  return { icon, text, href, description };
}

const rows = [
  createData(<GitHubIcon/> ,"GitHub", "https://github.com/Yaroslav4tez", "Відвідати GitHub"),
  createData(<EmailIcon/> ,'Email', "mailto:yaroslav4tez@gmail.com", "Написати на email"),
  createData(<TelegramIcon/>, 'Telegram', 'https://t.me/y4tez', "Написати в Telegram"),
];

const Main = () => {
    return <div className="containerMain">
        <main>
            <div className="mainContent">
                <Typography variant="h2" gutterBottom>Портфоліо</Typography>
                <Typography variant="h3" gutterBottom>Освіта</Typography>
                <Typography variant="h4" gutterBottom>hillel It school</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p>Курс: "front-end PRO", червень-жовтень 2026</p>
                    <p>Завершив чотирьох місячний курс по java script. Познайомився з багатьма сучасними фреймворками, бібліотеками, менеджерами станів <br />
                        Вивчав роботу з репозиторієм GitHub, використовував в домашніх завданнях: Оператори, Цикли, Функції: замикання, колбеки, стрілкові функції,
                        рекурсія; Масиви, Об'єкти. 
                    </p>
                    <p>
                        Вивчав під час навчання: DOM та Event, WebStorage, OOП, Класи, Асинхронність.
                    </p>
                    <p>
                        Познайомився з техтологією використання: Бібліотек, Babel, Webpack, React, Redux, Node.js, Форми, Тестування, MongoDB.
                    </p>
                </Typography>
                <Typography variant="h4" gutterBottom>Київська Православна Богословська Академія</Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    <p>2012-2016</p>
                    <p>Отримав диплом Бакалавра Теології, викладача Релігієзнавства</p>
                    <img src={dyplomFront} alt="dyplomFront" />
                    <img src={dyplomBack} alt="dyplomBack" />
                </Typography>
                <Typography variant="h4" gutterBottom>Досвід роботи</Typography>
                <Typography variant="body1" gutterBottom component="div">
                <ul>
                    <li>2012-2016 Володимирський кафедральний собор Україна м.Київ</li>
                    <li>2017 Comfy, Foxtrot - продавець консультант Україна м.Київ</li>
                    <li>2018-2022 Оператор листозгинального преса з ЧПК Польща</li>
                    <li>2022-2025 Оператор листозгинального преса з ЧПК Канада</li>
                    <li>2025 Оператор листозгинального преса з ЧПК Польща</li>
                </ul>
                </Typography>
                <Typography variant="h4" gutterBottom>Навички</Typography>
                <Typography variant="h5" gutterBottom>Мови</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <ul>
                        <li>Українська native</li>
                        <li>Англійська B1</li>
                        <li>Польська B1</li>
                    </ul>
                    
                </Typography>
                <Typography variant="h5" gutterBottom>Front-End</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <ul>
                        <li>HTML5, CSS3 – семантична розмітка, адаптивна та кросбраузерна верстка, Flexbox, CSS Grid, медіа-запити.</li>
                        <li>JavaScript (ES6+) – робота з масивами та об’єктами, функції (колбеки, стрілкові функції, замикання, рекурсія), ООП, класи, модулі.</li>
                        <li>DOM та Events – динамічне оновлення контенту, робота з подіями, делегування подій.</li>
                        <li>Асинхронність – Promise, async/await, fetch API.</li>
                        <li>Web Storage – localStorage, sessionStorage.</li>
                        <li>Форми – валідація, обробка подій.</li>
                    </ul>
                    <Typography variant="h5" gutterBottom>Інструменти та середовище</Typography>
                    <ul>
                        <li>Git та GitHub – створення репозиторіїв, коміти, робота з гілками, pull requests.</li>
                        <li>npm, Node.js – використання пакетів, скриптів.</li>
                        <li>Webpack, Babel – налаштування збірки проєктів.</li>
                    </ul>
                    <Typography variant="h5" gutterBottom>Фреймворки та бібліотеки</Typography>
                    <ul>
                        <li>React – створення компонентів, пропси, стан (state), хуки, JSX.</li>
                        <li>Redux – менеджмент стану застосунку (actions, reducers, store).</li>
                        <li>Material-UI (MUI) – використання готових UI-компонентів.</li>
                    </ul>
                    <Typography variant="h5" gutterBottom>Back-End (базово)</Typography>
                    <ul>
                        <li>Основи Node.js і Express для роботи з API.</li>
                        <li>MongoDB – базова робота з базами даних.</li>
                    </ul>
                </Typography>
            </div>
                <article>
                    <ImageList sx={{ width: 400, height: 600, margin: 5 }}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div">GItHub works</ListSubheader>
                        </ImageListItem>
                            {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        <ImageListItemBar
                                title={item.title}
                                subtitle={item.name}
                                actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                            href={item.http}
                            target="blank"
                        >
                            
                        <InfoIcon />
                        </IconButton>
                        }
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    <div id="myPhoto">
                        <img src={myPhoto} alt="myPhoto" />
                    </div>
                 </article>
        </main>
        <footer>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" colSpan={3}>Contact Info and GitHub</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                    <StyledTableRow key={row.text}>
                    <StyledTableCell component="th" scope="row">
                        {row.icon}
                    </StyledTableCell>
                    <StyledTableCell align="right"><a href={row.href} target="blank">{row.description}</a></StyledTableCell>
                    <StyledTableCell align="right"><a href={row.href} target="blank">{row.href}</a></StyledTableCell>
                     </StyledTableRow>
                         ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </footer>
    </div>
}

export default Main;
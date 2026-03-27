import React from "react";
//img
import dyplom from "../img/dyplom.jpg";
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
                <Typography variant="h3" gutterBottom>Front-End Developer</Typography>
                <Typography variant="h4" gutterBottom>ABOUT ME</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p> I am a Front-End Developer based in Winnipeg, Canada.
                        I have a strong technical background as a CNC press brake operator with 8+ years of experience, which taught me precision, problem-solving, and working with complex technical drawings.
                        Recently, I transitioned into web development and completed a Front-End PRO course, where I gained practical experience building web applications using JavaScript, React, and modern tools.
                        I am currently focused on building real-world projects and growing into a professional developer role.
                    </p>
                    <p>I build responsive and user-friendly web applications using modern JavaScript technologies.
                        Focused on React, clean UI, and real-world problem solving. 
                    </p>
                </Typography>
                <Typography variant="h4" gutterBottom>SKILLS</Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    <p>
                        HTML5, CSS3 (Flexbox, Grid), Responsive Design
                        JavaScript (ES6+), DOM, Events
                        Async (Promises, async/await, fetch)
                        Web Storage
                    </p>
                    <p>
                        Frameworks & Libraries: React, Redux, MUI
                    </p>
                    <p>
                        Tools: Git, GitHub, npm Webpack, Babel
                    </p>
                    <p>
                        Back-End (basic): Node.js, Express MongoDB
                    </p>
                </Typography>
                <Typography variant="h4" gutterBottom>EXPERIENCE</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <p>CNC Press Brake Operator <br /> Canada / Poland | 2018–2026</p>
                    <ul>
                        <li>Worked with technical drawings and precise measurements</li>
                        <li>Programmed and operated CNC press brake machines</li>
                        <li>Solved complex manufacturing problems</li>
                        <li>Maintained high accuracy and quality standards</li>
                    </ul>
                </Typography>
                <Typography variant="h4" gutterBottom>EDUCATION</Typography>
                <Typography variant="body1" gutterBottom component="div"></Typography>
                    <p>Front-End PRO Course <br /> Hillel IT School (2025/10)</p>
                    <img src={dyplom} className="dyplomImg" alt="dyplom" />
                    <p>Bachelor of Theology <br />Kyiv Orthodox Theological Academy (2012–2016)</p>
                <Typography variant="h4" gutterBottom>LANGUAGES</Typography>
                <Typography variant="body1" gutterBottom component="div">
                    <ul>
                        <li>Ukrainian – Native</li>
                        <li>English – B1</li>
                        <li>Polish – B1</li>
                    </ul>
                    
                </Typography>
            </div>
                <article>
                    <ImageList sx={{ width: 350, height: 600, margin: 5 }}>
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
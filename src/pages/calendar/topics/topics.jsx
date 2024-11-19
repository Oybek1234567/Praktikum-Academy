import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { Icons } from "../../../assets";
import bgImg from "../../../assets/images/bg.jpg";
import InfoPage from "./info";
import FilesPage from "./files";
import HomeworkPage from "./homework";
import TestPage from "./test";
const TopicsPage = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1 className='text-[32px] font-bold mb-[67px]'>
                Web va Grafik dizayn
            </h1>
            <div>
                <img src={bgImg} alt='' />
                <Icons.play className='absolute -translate-y-[300px] ml-[460px]' />
                <p className='translate-y-[34px] font-bold mb-[40px] text-[34px]'>
                    Mavzu: Adobe photoshop panelining instrumentlar paneli
                </p>
            </div>
            <div>
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label='lab API tabs example'
                        indicatorColor='primary'>
                        <Tab label="Ma'lumot" value='1' />
                        <Tab label='Fayllar' value='2' />
                        <Tab label='Uyga vazifa' value='3' />
                        <Tab label='Sinov testi' value='4' />
                    </Tabs>

                    <div
                        role='tabpanel'
                        hidden={value !== "1"}
                        id='tabpanel-1'
                        aria-labelledby='tab-1'>
              {value === "1" && <Box sx={{ p: 3 }}>
                <InfoPage />
              </Box>}
                    </div>

                    <div
                        role='tabpanel'
                        hidden={value !== "2"}
                        id='tabpanel-2'
                        aria-labelledby='tab-2'>
                        {value === "2" && (
                            <Box sx={{ p: 3 }}>
                              <FilesPage />
                            </Box>
                        )}
                    </div>

                    <div
                        role='tabpanel'
                        hidden={value !== "3"}
                        id='tabpanel-3'
                        aria-labelledby='tab-3'>
                        {value === "3" && (
                            <Box sx={{ p: 3 }}>
                               <HomeworkPage />
                            </Box>
                        )}
                    </div>
                    <div
                        role='tabpanel'
                        hidden={value !== "4"}
                        id='tabpanel-4'
                        aria-labelledby='tab-4'>
                        {value === "4" && (
                            <Box sx={{ p: 3 }}>
                             <TestPage />
                            </Box>
                        )}
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default TopicsPage;

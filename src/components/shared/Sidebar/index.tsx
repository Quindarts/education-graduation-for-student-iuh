import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { APP_SIDEBAR } from '@/utils/app-config';

interface AdminSidebarProps {
  isOpenSideBar: boolean;
  handleOpenSideBar: () => void;
}
const homePageIndex = 0;
const drawerWidth = '250px';
const hidedDrawerWidth = '76px';
const screen_mobile = 900;

export default function AdminSidebar(props: AdminSidebarProps) {
  const { isOpenSideBar, handleOpenSideBar } = props;

  const location = useLocation();

  const [activeItemIndexes, setActiveItemIndexes] = useState<number[]>([]);
  const [currentSidebarItemIndex, setCurrentSidebarItemIndex] = useState<number>(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < screen_mobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < screen_mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveItemIndexes([homePageIndex]);
      setCurrentSidebarItemIndex(homePageIndex);
      return;
    }
    APP_SIDEBAR.forEach((item: any, itemIndex: number) => {
      if (item.children) {
        item.children.forEach((subItem: any) => {
          if (location.pathname.includes(subItem.link)) {
            setActiveItemIndexes([itemIndex]);
            setCurrentSidebarItemIndex(itemIndex);
          }
        });
        return;
      }
      if (location.pathname.includes(item.link)) {
        setActiveItemIndexes([itemIndex]);
        setCurrentSidebarItemIndex(itemIndex);
      }
    });
  }, [location.pathname]);
  useEffect(() => {
    if (isOpenSideBar === true) {
      setActiveItemIndexes([]);
    }
  }, [isOpenSideBar]);
  const handleClickSidebarItem = (indexNumber: number) => {
    if (activeItemIndexes.includes(indexNumber)) {
      setActiveItemIndexes(activeItemIndexes.filter((number: number) => number !== indexNumber));
    } else {
      setActiveItemIndexes([...activeItemIndexes, indexNumber]);
    }
  };

  return (
    <Box
      sx={{
        width: isOpenSideBar ? drawerWidth : hidedDrawerWidth,
        transition: '0.1s all ease',
        transform: 'scaleX(1)',
        maxHeight: '100vh',
        height: '100%',
        position: 'fixed',
        zIndex: 1000,
        bgcolor: 'primary.dark',
        top: 0,
        borderRight: '1px solid #cddef8',
        display: {
          xs: 'none',
          md: 'block',
        },
      }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isOpenSideBar}
        onClose={handleOpenSideBar}
        sx={{
          bgcolor: 'primary.dark',
          color: 'white',
          flexShrink: 0,
          height: isMobile ? '100%' : 'calc(100vh - 70px)',
          ['& .MuiDrawer-paper']: {
            width: isMobile ? 250 : '100%',
            border: 'none',
            height: '100%',
            bgcolor: 'primary.dark',
            boxSizing: 'border-box',
            overflowX: 'hidden',
            overflowY: 'hidden',
            display: 'flex',
            position: 'revert',
            flexDirection: 'column',
            transition: 'all 0.3s',
            '&:hover': {
              overflowY: 'auto',
            },
            '&::-webkit-scrollbar': {
              width: 4,
            },

            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'grey.400',
            },
            '.Mui-expanded ': {
              margin: 0,
            },
            '& .MuiTypography-root': {
              color: 'white',

              overFlow: 'hidden',
              '&.active': {
                fontWeight: 600,
                color: 'white',

                '& svg': {
                  color: 'white',
                },
                '&:hover': {
                  fontSize: 'body2',
                },
              },
            },
          },
        }}
      >
        {isMobile ||
          (isOpenSideBar && (
            <Box
              px={4}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              textTransform={'uppercase'}
              flexDirection={'column'}
            >
              <Typography
                variant='h6'
                fontWeight={500}
                pt={{
                  xs: 10,
                  md: 20,
                }}
                color={'white!important'}
                sx={{
                  opacity: 0.7,
                }}
              >
                Danh mục
              </Typography>
              <Box sx={{ width: 170, mb: 10 }}></Box>
            </Box>
          ))}
        <Box pb={10}></Box>
        {APP_SIDEBAR.map((item: any, itemIndex: number) => (
          <>
            <Accordion
              expanded={activeItemIndexes.includes(itemIndex)}
              onChange={() => handleClickSidebarItem(itemIndex)}
              key={itemIndex}
              title={item.text}
              sx={{
                bgcolor: 'primary.dark',
                boxShadow: 'none',
                mx: !isOpenSideBar ? 'auto!important' : '',
                '&::before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                className={`${currentSidebarItemIndex === itemIndex ? 'active' : ''}`}
                expandIcon={
                  <>
                    {item.children && isOpenSideBar && (
                      <Icon width={20} height={20} icon='ic:outline-keyboard-arrow-down' />
                    )}
                  </>
                }
                sx={{
                  overflow: 'hidden',
                  height: 50,
                  px: 4,
                  '&.Mui-expanded': {
                    minHeight: 0,
                  },
                  '&:hover': {
                    bgcolor: '#333',
                    '.MuiTypography-root': {
                      color: 'white',
                    },
                    transition: '0.2s all',
                    '& .MuiAccordionSummary-content': {
                      '& svg': {
                        color: 'white',
                      },
                    },
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    '& svg': {
                      color: 'white',
                    },
                  },
                  '& svg': {
                    color: 'white',
                  },
                  '&.active': {
                    color: 'white',
                    bgcolor: '#333',
                    '& svg': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Box
                  display='flex'
                  alignItems='flex-start'
                  justifyContent='left'
                  marginLeft={isOpenSideBar ? 0 : 4}
                  className={`${item.key && location.pathname.endsWith(item.key) ? 'active' : ''}`}
                  gap={4}
                  onClick={() => {
                    if (item.children) return;
                    navigate(item.link);
                  }}
                >
                  <Icon onClick={handleOpenSideBar} icon={item.icon} width={20} height={20} />
                  <Typography
                    variant='body1'
                    fontWeight={500}
                    sx={{
                      flex: 1,
                      textWrap: 'nowrap',
                    }}
                  >
                    {isOpenSideBar && item.text}
                  </Typography>
                </Box>
              </AccordionSummary>
              {item?.children && isOpenSideBar && (
                <AccordionDetails
                  sx={{
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  {isOpenSideBar &&
                    item?.children?.map((submenuItem: any, submenuItemIndex: number) => (
                      <Box
                        display='flex'
                        alignItems='center'
                        gap={1}
                        sx={{
                          py: 6,
                          position: 'relative',
                          '::after': {
                            content: '""',
                            position: 'absolute',
                            width: 4,
                            height: 2,
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            transition: '0.3s all',
                          },
                          '&:hover': {
                            bgcolor: 'rgba(162, 203, 251, 0.4)',
                            '& .MuiTypography-root': {
                              color: 'white',
                            },
                          },
                        }}
                      >
                        <Typography
                          borderRadius={8}
                          variant='body1'
                          component='span'
                          sx={{
                            flex: 1,
                            ml: 8,
                            textWrap: 'nowrap',
                          }}
                          key={submenuItemIndex}
                          className={`${location.pathname.endsWith(submenuItem.key) ? 'active' : ''}`}
                          onClick={() => {
                            navigate(submenuItem.link);
                          }}
                        >
                          {submenuItem.text}
                        </Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              )}
            </Accordion>
          </>
        ))}
      </Drawer>
    </Box>
  );
}
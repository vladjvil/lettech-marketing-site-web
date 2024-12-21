import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';

const allCases = [
  { title: 'AI-Powered Chatbot', description: 'Developed an AI-powered chatbot to handle customer inquiries and provide 24/7 support.', image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/5208996-1.jpg', category: 'Software AI integration' },
  { title: 'Smart Home Automation', description: 'Implemented an intelligent system for controlling smart home devices, enhancing user convenience.', image: 'https://cdn.motocms.com/src/868x580/84600/84608-original-1200.jpg', category: 'Web IoT Solutions' },
  { title: 'Blockchain Integration', description: 'Developed a blockchain-based system for secure and transparent transactions.', image: 'https://i.ytimg.com/vi/nidmDGwJ-Jw/maxresdefault.jpg', category: 'Software Blockchain integration' },
  { title: 'SaaS Platform Development', description: 'Built a SaaS platform for small businesses to manage their inventory, sales, and customer relationships.', image: 'https://www.beecoded.io/wp-content/uploads/2024/07/saas-development.webp', category: 'SaaS' },
  { title: 'AI-Powered Analytics Tool Integration', description: 'Developed an AI-powered analytics tool for predictive analysis and real-time data insights.', image: 'https://digital.ai/wp-content/uploads/2022/11/agility_productscreenshot.png', category: 'Data Science/Web' },
  { title: 'IoT Monitoring System', description: 'Built an IoT monitoring system for real-time tracking and predictive maintenance in industrial operations.', image: 'https://images.ctfassets.net/aw6mkmszlj4x/3slZtMQ41dTlsHkOrwCYs2/a4542fc2df70a838df81eb20ee5d4f6a/Logit.io.png', category: 'IoT' },
  { title: 'Cloud-Based Collaboration Tool', description: 'Developed a cloud-based collaboration platform with real-time document sharing and editing.', image: 'https://150763658.v2.pressablecdn.com/wp-content/uploads/2018/11/Asana-1024x513.webp', category: 'Collaboration' },
  { title: 'Real Estate Platform', description: 'Designed a real estate platform to connect buyers, sellers, and agents, with AI-powered property recommendations.', image: 'https://www.artlebedev.com/strana-development/strana-development-billboard.jpg', category: 'Real Estate' },
  { title: 'Automated Data Backup System', description: 'Developed an automated data backup solution for secure and reliable data storage.', image: 'https://www.softwaredefinedautomation.io/wp-content/uploads/2024/08/Backup-created-jpg.webp', category: 'Data Security' },
  { title: 'AR Mobile App', description: 'Developed an augmented reality mobile app for virtual product trials and experiences.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_67vdxnXDd_lM-mq5Q1QBCFZwJJe3wqWj-w&s', category: 'Augmented Reality' },
  { title: 'Healthcare Mobile App', description: 'Built a mobile app for healthcare providers to manage patient records and appointments.', image: 'https://www.medhelpinc.com/wp-content/uploads/2017/09/MedHelp-Inc.-Website-Screenshot.jpeg', category: 'Healthcare' },
  { title: 'Video Streaming Platform', description: 'Created a video streaming platform with live broadcasting, on-demand content, and subscriptions.', image: 'https://samesound.ru/wp-content/uploads/2024/08/kak-perenesti-video-v-rutube-iz-youtube-instrukciya-po-perenosu-1.jpg', category: 'Media & Entertainment' },
  { title: 'Event Management System', description: 'Developed a system for event registration, ticket sales, and attendee management.', image: 'https://logtime.me/images/en/mockups-min.png', category: 'Event Management' },
  { title: 'Multiplayer survive simulator', description: 'Developer higload multiplayer survive simulator from scratch.', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEhIQFRUVFRAVFQ8VDxAQEBUPFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAI4BYwMBEQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADgQAAICAQMCBAQDBgYDAQAAAAECABEDBBIhBTETQVFhBiJxkRQygQcjQqGx8BUkUmLB0RZykgj/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QANREAAgIBBAECAwUGBwEAAAAAAAECEQMEEiExQRNRImGRBTJxodEUgbHh8PEjJDNCUmLBFf/aAAwDAQACEQMRAD8A/IakOtDAg1RpjJHaZaTOmOTi7R26fU8czzzx+x9PBqlXxnWD6GcqPoXfKZDOZpRRylkkjRMtzDgdYZrKKBhyJLcejcscMy5RyanSVyJ3hlvs+dqNFsVxObbOtni2jCyWXaUFks2olBZLNKBQWSzoolhZLOiiWqzLZ1jE1UTLO8UaKJhs7RiaASHVIYEhpIoCSzVFASFERLZKFUookiDLRJWWzDiZsk0mcpQM2SaTOEoGZSaTOMoAuAmHNIR08pvg6MOnA+s5SyWezDpVDl9mxmEelrwRYlpmbSDdLRnen0c+adInjzHJlf0naKPn5Z06RzkToeVqykxGxxI5Go43a4OrxFX/AKnKmz3LJjx2cmZ9xudYqkeHNPfKxHJ5VKokeRVVGJE2edokiUzQqgzQSijQLMnRIYWSzSiUFks2omkydPFFqxEy0jrGcl0aLkMztR1WWXk3xZfUCYlE9WLMq5RXj1Jss2tRtGctiTbRp5t0WcxWdbPC4qx7IsvpjCyWaUCgslm1EbUO/qB+p7SdmmlHs0CTNnZQNAslnRQLVZmztGJoBMnRIoCSzSRQElmigslksoJJYsNkWSxFZbKQRLZSSstkokiUy0QyypnOUCNk1Zy9O2bCcz0rhATFFujM2ZvhHFtyTaIVBXv63NN8nKONbeXyGND51I2hjhLp8EaoCvcTWNuznqoxcOO0cZSdrPmOABRFhQXkrI1jiRI65J2kl4MSs3Z5nEkrLZhxJKy2ZcRFZbMuJBWWzDiIrKZcSdsWZo2CzFnoUSwslm1EoLJZtRLCyWbUSgslm1AoLJZtQAVdeY8pCpK6EXX1HAs8+XrHIbiu30WjC6B8gf0Pb+kjOkWrpMvbJZraJKIsdu9+0MsUpLcujQJJZ0WMWYhVLHihC5dDJUIOT8HjN1QkMpoivlatp3DtYud/S6aPkPXOUZRlz7Prky/H5HZT3IPC1xuN+UvppI5vV5Zzi+2ul/I+j0TFkViQSRdgED+c8k+HR+j0zc8SlKufY6Qs5tnpSGFks0UFkBqqzLZls1XHMNmGzZcEw5nNzG2CFMKZhkQCdE7OikZFZqzdkFZopBEtlJKypkaJKy2YcREQGhMsqZJQvyQVMvByaklQq9ZSUq5ILmVJHNzkZsJtHCStEFZbObiLbFk2i2y2Z2iKy2ZcCSsWZcCSstmHAkrNWYcSCstmHEkrLZzcSdstmdpuqzFnpUCwszZ0UCwszZ1UCwslm1AoLJZtQKCSWbUDyuq5wjCvzVR91PrO2NWj5mtyenkW3uvqjyAxnc+ZbN9Pq2Q2D6Aj1UeUy4pnbFnnjdpm7dVynzUe1THpRO71+V+30OfFqWVSoPB7j1m3FN2eeGacYuKfDOzp+ry1sU2xYAXZAWu/9+85zhHtnr02pzJbIO2355PYzYC6DxSoAILUflYD1vtPOpU/hPsTwSy40s1Rp268/oeB1PIjZGKdjXPYXXPE9WNNR5PhauWOWVvH0ZaXLsYNzwfI0fvLJWqOeGfpzUvY+p6ZqMeRfk79yDQNnuePWeLJGUXyfp9FmxZIfB+/8ff9/wAuDuAnI9pQWZbJZoqzLZls3xpMNmGzrw4xdTlKRxlI9PS6LdPNPLR5J5qK1XTq8pI5fBnHns8vNgF+89MZs9kZs43wTspHZSMXWptM6JmZE1ZqyCJSklZbFCqUgjKRkkSmGiSstmHAkpLZlwJKS2YcBFIsy4ElJbM7BbZbM7BFIsy4ElJbMOBJWWzLgSVls5uBBSas5uBBSVM5uBG2WzntOhVnNs9kYlhZLOiiWFmbOqiaBZLOiiUFks6KAZEsEex/pInyJwuLXyPlHwNtLsa5qje4mgf6Ge61dI/LPHJx3yf17OeaOQ4AQAEA1whu62K7sCRV+pkddM6Y96e6PFeT29Jjy5sbI7HhwCT32gHj35r9DPNJxhK0fawRz6nDLHN9Pm/av1MNN0798iuoA2WRfBKiiePXg/rNSy/A2mcMOi/zEYZI0q+tcfmcKgK7A8DcUJ70t8/0v9J0fKs8KW3I4vhXT/Cz6fT9MRHDqT2ojyIqvuTR/SeKWVyjTP0mLQwxZFkg/l+X9megqzg2e1s1RJlsw2dCJObZzlI6seOcnI4ykdOEru22N1XtvmpyldX4OMm6s+n6LmxItt+b6dhNabJig3KfZ8vUKcnx0b9U1OF0PPzeRo/adNTmw5Y8feXyOeGM4y+R8lrWRBuYhR6n1nHHulwuT68GzjG1hakEc8+XHE7cp0zupGGTHNqR1jI53SdEzqmZss2mbMyJopJEoJKy2BVBKFUpKFUEowzahUJDcUu6/Krr7zai30efJnx45NS4pX+4tGDAEHg83I7To3FxnFSXTMM2qxp3YfQcn7CajCT6Rwy6jDj+9JHG3V0vhWI9eBO3oSPBL7UxXxF/kb4ddibzo+h4mJY5LwejHq8GTzT9nwdCEMLBBHqO0xyuz0R2zVxdo5dbqRjriyfL2nSEXI8eqzxwUmrbMNNrd7bdtcHm5uWParPPh1Sy5NtUa5syKaJo+kzGLfR0y5McHUmCsGFggy8oi2yVxdi2xZnaZjPNbTms5Y1Emw2tQUNRM7DotSUNTJsNLVDbVgCyY9M1+1pKzlbrA8lJ/lN+ged/aiXSs8vV5vFcs1jjjzqhwPvO0Y7VR83Pl9bI5Pgl1BVe1hWv6hj3/Qwu2Ykk4x/B/wATCaOZfhnn25Mll2sSwEdvTsVnnsbBHb+E1/Wc5s9emjbp9Ph/Q9zS59qKpNkAAn6TzSjbs+5p9Rsxxi+0jJ86+Mr7hQVl/MO9yqL2NHOWeP7THJfCTR5+TS7zlruX/kSpv7EzspVV+x8+eDe8jj5l/Gn+p7umzUqg9wqg/WuZ5JR5dH3sOX/Dipd0jYZpnadtyZYyzO1GuDj1mRvFxNZoEg80B5zpBLbJHh1CazY2unwzHX9dyBtqEivPsfMfb3lhpotWzyarWqM9sF0dPStYcmTxSfm4JHl2riYy40obT0aaazJv8j6zp3W9h55nzp6d9omfR7lwa9T6/wCJ2AEkcEm7kYwaJx7Pj/iHqbH5QeOLHoe45n0dPhS5omrksSpE9E1LBPb1s8+vH1uazQTkd9Ct+O2jubUH1nJQR7tqRmcx9ZraXgk5pdpHJIg5xNbTDyxIOpEuww9REk6oTWww9TEk6sRsMvVo49b1Pbwvf19J1hhvs8Wp+0nD4YLn+B5K6hw24Md3+q7NfrPS4RqqPjR1GVT3qTv3G+qyHu557yKEfYstTld3LsyLE+v0viao47m1V8CmjIQAgGmHUOn5WI9vL7TMoKXZ2x58mP7kqDNmZzbHmIxUeETLllllul2ZgzRzTa6GzE9yT7k3IlRZScnbdlYcpU2Pt6iSSTRceRwlaO0a5Zz9NntWqRzb51o8O4e+KLvYjlqShvYhnii+oyM7k/SVIzKTZjKYEYAESFAiADf1gWyWHPEiK6vgq4JbKOQ9rP0uKRrfLqxCCHRpNRtse/8AxMSjZ6MObZwdi6wesw8Z6lqvmXj6gPUj6zLxnSGtXua/4mo87+nMx6LZ3/8AoRj5MtZ1BXXbZ7ixXdfMTUMTi7OWp10MsNqfnnjwefqcu9ifLgAccKOwnWMaVHz82X1JuX0/A6tHr2QUAvNeXM5zxqXZ69NrZYlUUj0dN1hgQflPsVBH2M4ywJqj3R+0HL735cHS3V1J5Jrg3XF/QfWc1ha6PVHXYE66+ZlrEGSjYoX2o80f+pqDcSarHHLTTVI3RgB/ffzMy02z0RlGEaRD6iaUDnPUUYPqZtQPLPVGDamdFA8stSzJtTNKBwlqWZnUGa2HJ6hknPNbDDzszbUS7TDzs52azc0cG23bJlIIwQJQOAEAJAKAEoCAFwAuAEAreIAHIIBmTBBXAHcgFKAkAoAGAOAIwAEA0wYHc0iO5q9qqzGvWh9YBuenZwQDhzWboeFks13oVzIa4MceFyGYI5C/mYIxC/8AsfL9YLaNc2jzINz4sqrx8zYnVee3JFQLJXTZCAQmQhjSkIxDNzwprk8HgekULBNPkJKjHkJW9yhGLKB3LCrH6yULKxaTK6nIuPKyLe7IuN2Ra5NsBQgWRhxM52orMT2VVLN9hBbDEjMQFBYnsqgsx+gHeZLZ0abFkdtiJkZuf3aIzOK4PygXI4s6RyJAyMWKBMhfkbNpLgjuCoF2JFFmp5ItWZ5sOXF+dMiX/qR8d19RzNNHKM2unR0MdVe3ZlsDcR4LWE/1EVwPf2mfSXsd3rcrVWRp8uZ+FVnPelRmNevy+XaVQRP2mfkrP4qV4mPKl9tyMt/SwLjbRl5nIwOaWjDmz6v4a+Em1ONsrFaXadhOQcNZX8ik/wAJ70BOcpydqPg+jh02KCjLUX8fSXH15Xv0j3MPwCX3UuH5WyKbfN3R2xnsvAtDya4q6mV6r8/19DvNfZ8auD5Sfnyk/wDl7MyPwOOBtwjcrPZy5QAoGImzXHGZPsf1l5ff+v6Zr09BT+B8OvPz+f8A1Z818VfDZ0bGiCBtut5FN2KlgCR5f8zrCbvbLs8Op0kFj9fDe3ynVr6X+p84TOp84RlAQQIAt0CwuAFxQC4FhcALigEoACQUEAUWSiWMAayGqQTRkJAEAIFBBaCBwKAFSWKEsMqP07/8/cdSy8kf5PPzXb97h5lRmSPqvhL4lx5+q6NB1XLrlKavjJpBpQmXwxs2/KNxYb//AJ94IeR0rpeo0XSuuHVYsmEZHCYzkUp4jbmFpf5lJdaI4Nyg/TtTly/jV/zqeAmjOTN0kYFy58qU6+Iv8VWVFC7K1XzQQ+I6JrMP4Do2RR4eJurZiinsiPk1gRT9NwEFL6V0rPpup9b1WfFkx4Dp9SV1DqVxOHpxsY8Nwpuu3Y8yF4O74Y1Oo1Wm0enwnqfTciabGEYaJM3T8o8MN4jOVPcC6ZlNtXc2RD87/Y3gOLrmPGWVin4xCym1YqjgkHzBq5F2bfR+jfC/SemYuoJ1LEwJ17Mmm09C8Go25G1h9q2Ecdt5HYiUzfg8rJk1WDpuoy9JQtqm6nrF1bYsS5tSqDNm2ALRNV4XYGg5PmTBF8z2NGrHW9Ey6tVXqD4tYM4CqrthGnybTkC9jdcerOB24F9zn+Kzl1HSupp/nXOMjJev0wwY1xo5Y/hWVRvoIasnuvryIetq0ZuqapVBJPRsYCgEkk5c1ADzNwD4P9h/StXpdZn/ABGDVYC2iy7N+nyY3bbkxX4YcDcRuH6kesJGpO0jw/2r6zUZBp97dWbGDl51+iTS1kO3jGVRd3AN9+whkifnbGZNN8H6XocOXLWHGGYuV/dg8ErdEjtxzye3M+fy+D9rJwgt8qVLs/RekfBuoI8TUajOxpfkTK6ihdDeeWqz2ruZ3jCb5bPgZ9fhXw4sar3a/wDDx+t/Detw2dPlzZMfDFDl2ZFKVt4sBqCrR7/KOJmUZLpno0+s00/9WKi/euOe/wAO39T4b4iyZGx5jlLlwjBt+7eCB2IbkfSZg3vVnu1Mca0k1jqqfR8Hunvs/JDgBAFKQIAQAgDJkRRSkCAEAchQkKJJGypCixQuBBKoRMpOAUwVFqn9+Um40oDbGRCkiODToVRY2ksZSUUJDSEWgB5wPJ09P6jn07F8GbLiYqVL48jY2KGiVJU3XA49oJVnPicoQykqVIIYEqwYGwQR2I9YFcHf1Xr+s1aquo1OozKvKrkzO6g1V0T3onnvLZKQf+Qa05Rn/FanxlXYuf8AEZfFXHz8ge7C8nj3iy0jHU9V1GTGMWTNmfGHZxibKzYxkYks4UmgxLNz/uMg4OjX/Emuz4hhzarU5MQr90+fI6cGxYJ5qhV9pSUjTF8VdRXF4K63VjFVeGNRl2he20c8LXkOIsbUcOg12XA4yYcmTE4sDJjdsbgEUQGXntMmg0uuy4sgy48mRMikkZUdlyBiCCQwNgkExyODo0HXdVp8jZcOoz48jkl3TK6s5JJJej83JJ59ZbZGkP8AxzV+N+I/EZ/H5/zHjP41EEEDJdgUSKvsZC8dF9Q6/rtQmzPq9VlQ0TjyajLkQkcglSaixtQx8S68ZDlGs1YyFBjOUanKMhxAkhN13tBJNe8tkpFH4r6iWD/jtbvCsof8Vm3BGKllB3WASqmv9o9JSUjm6l1vV6kAajU6jMFJKrlzZMoUngkBiaMCjzjBH0ftfwEQmV8pBO1VQAVd5D7+ymeCDUbbP0n2o24QgvNv6L+Z+rarq+PGt9vduPsByZ7N19H5zb7nz+o1oz3dnHzuVDudwPI5B8mNPU7rryElVyx3wj8u/aC+85MtKpy6dcjKAQA1FQOf9qqP0nlhLdNP5n6DHa0U4eyZ+Xz3H54YMCx7oKPdKQoCLQpilA2FTKkmacWhAy2ZCUgQAgADIWypDRiDDA7kolilIKAOCjDSUExpkP8AfpDRVJnX9Pt5VOR6eL4OR+TOq6PM+ZUNxUiNNURNGQgHtfDvVNNp1zDUaYajxFxhFJCbWR997+63QBruLHncIy0z6TTfFnSUzHMNBTNkzsD4aHww+TIwKqMgDHacagDb4ewkFrlJTOZfiDo4ZW/w9ybx7w7jKHs4Bl53CjtTPXH5slmuwCmc7dU6Pt40ecucaAkuqouYYMyFlWySDkbG/cfl8qpoWmehh+I+i4nc49BnKu2S1Z1A8HI2K04Y/KqrkoXySOQDQopnm9I6r0rHp8aZ9Hly5V3b8gZUDXk3cNfPyhRyPUXzFimdT9b6MFG3Q5C2x0bcE22wBDin/MrA0a7Pz+UXBTOHr3V+n5MbJpdGMbMU/eMvKoDlNL87fNTYlLfxbCaBNRYpntar4w6dkff+B2hXXIqjDpbZsb5tmJyAAMZXIgPBK+H/AB8UtFpnF1X4p074nx4sAVn0+PFu/C6bGi5FyKSyC2Zf3W9bDclrAWLG1nx9TJofPvBSWlITKQIIIwD9K+AerJky4wWpvlDJdWw7GvMf9zwZYOD+R9+WohqMEZf7o9+/9mfpOu166cF3xYwvyjxl0mLLkF8WxJ4586M6Qz8Uz5v7I8kvg8kN1HJrMRGLPmOMnaysuLHeP+IUiiwR5E9vKZyZrVIsdLLFP4+0fmX7UeqYxmbEhBYY8WNq5CgEsQfemAmsEG6fg9GXUxhp3jX3pfkj88nrPjhACAECxgwVMe6Qtk3KSwghpLZaHAFACoFDgpjUhAuAEAIFjgBAAwGbplHF+QqYcTtGa4szJ5ua8GG/isWQwkGxCUgoAGAFQBiQCJlBQkKEATQgCmAaqZhmkxl4ou4BkMUFNj8YxtL6jJZwfKVJoy2mZtNGGiblIKCDgGx1mUijkyEehyOR/WSl7F3NeRLqcgBG96Pcb2o/XmKXsVyk+2zMD0lMpCgjCAEAIAQAgBACAWsoHKUDIAgClIZzICAOCiEECCjgCMApDUjKmkbZMY4ImU/DOs4KrQMB/L+cKw6OcTZyGTBSZSFXIUQMEsGhBgpgqNQhmW0aSBkhMNCRIbIkbkTCOrRm00YZBlMhACAIygKghO2WxQAGAOQCqUlGi5WClR2PfgX95mk3bOkZyjFwXTMjNHJhBBwAqBQQAgBACAAMBFb4LaDdA4AGUgQCJAKAO4A4KEECABgoQC1fiuZlrk6KXFGbMZpIw2xgwUe0SWWhge0ANpi0KYeHFjaPw5LG0tMUjkbUGaFTM2b2uuBDF6xuJs9ytoEl2apIkmUy2QTNGCDKZFKAgDkAVAAwBCUBUgAiUABAJlIOuJBQ7goOIQYku4ZF2URJZaQbJbJtEEiybCTKZCAKAEAe6ATKAkA4AQBiCoNpiy7SgslmqHskstDGMxYUR+DJuLsKGISbjWwoKJLKoooCLLQbZLLtCoJQxBUFwUdyFsTGWjLaMczTcUc5szuaMBcUBAwBXKQAYAiYBdyFC4AhAHcUAkA7gClAEQAqLAEQAgATFAe6ShYw0UWxEwQRAlsy4kkSoy1RMoCAEgHUFooIZLLtLXEZHI2oFjEJncaUCgoktmqQ6ECkAgqoYEg80EF88hcC64EZTIgPvArgYIrmC8VyMj3kDTRJJlRG2EEGTIaIaaRhmLtNpHNsQlAiYIAgojBBwBQCgYKAMALgCuAMGAPdJQsVyiypChAHcgEYA4BO2WyBBQMpAkKG6KFhx6RySkFCLYpGgxiZ3M2oooLJZaKuQ0EAY/viAhsRIrNSoQIlIqoaV2kZY0uBbfX+stkpWNz7mEWTfuIE+0cETdASD9YDprjsW/1H84r2Ju9yrEnJrglhKjLXkUpnsYgpJAhEZEpkhxNIyyZSCEoGJAPbFloCIAoIISkQCQozAJlIOAFyFCUFSFAdpAO5QDGQCuUWMGQBBSpABgE1KQKgBUFNbmTRQqQ1wLdFEsEa4aoqdsu5C20DEmEG2yQ5Hp9paRFJoa5KNyNcFjOnZe8GSqN7kxE3xBG7dENc0jDuyrEheA2XFl22hUPODNLyNRcMqVkniUj4GtGRhUxlLizTjfJDLUqZhqiKuUyZMJtGGhVKByAoGQqJuUljMFJlMiBgWMwVjAkCJMpkDAGIKMGQox5QUQ84IEADAYCAVchoBBB3BQBgCJggQU//2Q==', category: 'Gamedev' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

export function CasesPage() {
  const { theme } = useTheme();
  const [visibleCases, setVisibleCases] = useState(6);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const handleShowMore = () => {
    setVisibleCases(prev => Math.min(prev + 6, allCases.length));
  };

  return (
    <div className={cn(
      "min-h-screen pt-20 transition-colors duration-300 relative overflow-hidden",
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    )}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
            Innovative Solutions
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Discover how we've helped businesses transform and thrive in the digital age
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="wait">
            {allCases.slice(0, visibleCases).map((caseItem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                className={cn(
                  "group relative rounded-2xl overflow-hidden shadow-lg",
                  theme === 'dark' 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                )}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredCase(index)}
                onHoverEnd={() => setHoveredCase(null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "flex items-end justify-between p-6"
                  )}>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className={
                    cn(
                      "text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors",
                      theme === "dark" ? "text-gray-200" : "text-black"
                    )
                  }>
                    {caseItem.title}
                  </h2>
                  <p className={cn(
                    "text-sm mb-4 line-clamp-2",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {caseItem.description}
                  </p>
                  <span className={cn(
                    "inline-block text-sm font-medium px-3 py-1 rounded-full transition-colors",
                    theme === 'dark' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-50 text-blue-600'
                  )}>
                    {caseItem.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCases < allCases.length && (
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={handleShowMore}
              className={cn(
                "group flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-gradient-to-r from-blue-600 to-violet-600 text-white",
                "hover:from-blue-700 hover:to-violet-700 transition-all duration-300",
                "font-medium text-lg shadow-lg hover:shadow-xl"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Load More Cases</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
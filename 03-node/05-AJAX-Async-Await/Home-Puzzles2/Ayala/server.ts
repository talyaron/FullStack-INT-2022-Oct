import express from "express";

const app = express();

//כדי להעביר מידע 
app.use(express.json());

interface News {
    name:string;
    src:string;
    // link:string;
    
}

const news:News[] =[
   {name:"Bbccom",
    src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEX4+Pi4AAD///+0AAD8///5+/vpz8++MjLLZWX24+PANTW5AAC+KyuxAAD99fX/+vq7GBjXi4vovr7bmprrxsbks7Phq6valZXDPT29JSXv0NDeoqLitLTQeXnIWFjERUXFTk7Yjo7y2dn56+vObm7LYmK8ICDIVVW7Dw/v3Nzz5ubUgoLQdXW7GhrfpqbNbGxUFUvGAAAGA0lEQVR4nO2d7XKqOhRADTtUUUEFEaUqCLWl2qPv/3Y3H2hRcO40R+i9yV4/TjkkOsOanewEJOn1EARBEARBEARBEARBEARBEARBEARBEOQ/i02fgv3b19EhTFnvZR1ttkn/L0i2m2j90jNFnU0PQUIAgPw1/EuS4GCAOJv66TOMVd2lvu7i6Hz8VGelufGc/vaVtYjdG7QgTYgb9LQNOPrZjjPJp6YBR+cthZoE9Gyo1G/VmqbeaNyyNeYt1s6bfWhbGuegW16gSRfaEs3Cjb623kQ58KqVN9vrQhrH06mZ0lknwcbCbaZVuHUjjfPbV/pE6KKjYGPhttAn3OiyK2uELLXRZuedBRsLt1yXpEDXXWpb6xJudNadNUK0yaX0o0ttW220FV1qK3TRZnfYtbHOTZOUYB+61abJbRD7pVttGWpT0faC2lAbavsZqE0J1KYEalMCtSnRqK04D2rsRUn9/GDwsKBh2qa1tqHVAK8HTQXkUcEYtVkerzd6qG2C2lDbv/J8bZProZna1sVqtRrv45q2uSjYzhu0eUfmanzMDdYWiiQA7rymrSwIa9piELi+0drGzFYC2wZtrC3uYXivjddZ5J6zM16bNXugzTrVte0AskqnZ6q2VZatCTQ10izzp1BrpEuSWqgNiOu6ZFtPCbIgmdxrm8IGtYUwDaLZO/QbtEXRbgzF5E7bCt5Qm+zbPHDjxr7NIrC+07a9HdiZrM0C8Ju1jWBxpy0EOPK/E8dobe9heFoS8OrawnCREte502YlAONZ9AavJmtzweVdf1zr22SBjMLbWcLA5aPdciBsprbPBSMs51ZVbQdRcJlb3c5J80UUrD2T+7Zb8A5IFdSmBGpTolFbP3dqZOK2R/2845AHBblp2gg0oFhgkrbWQG2oDbX9FNSmBGpT4nEmrRxfTn2nyKZEWUmq5NHCNVprG899PyzPH9lxQciA/bmwAxL6/rx/a3gz9+df/CDKvMnEi6N307SJWYJ8y1TcU/tDYFcZ/c8B+AR/w8tHE88T6xOIUwMC2+/5QoM3/bXJqxbapgRmt9oiiz+6YuUDfmLEDtxcHFTnZSsjtcnpVEWb/yo4sTDjT6h4kMGJ19wSOV11XPGYK94Wf9JdZtyctAyZI9xqe/ueNEE5uYeMV+RLFPAHXAvgU/rcFYIgNbORcl032r4qlx/LRgiXuBTN9iz+77j1bzRGWzARzbCq7ex+R1sgLJEPVkncOxKtcyqfOyyKh4vAaa8t+pLNsqItmwsC/olUtE1u78uxrA+RERwo+zorC5bN4rTXFvDHo5OmTBpfOrdYDESKkFWGkeja2PnPstZhY9yNI6EN3tm/a/eRtpjnBOAJ4I2dcvdi1MYLosvArWlpMwO0iSFucqoMQKKAI4a5onDFmqoPBTsSfd1ImoF9KB+gRvWvNkAbAXb1TlAbgMg6S34i4nMFXi2Jy3FeaW7ME0XDq6omaBNqvMYBCBE588S7NpEGdp78xBWXN1VDtZV58aqtWpU/k888MUhjI13eKlMRhGUd1ysfdhmojUBe1XYcLiXiI1+iSKz0c/0FKvtAfBY3jcJL7jBRW/mbwLupvJxsFuKQZ08xZbD8q+fckSlhW/9mQ7TJX6A2anPFCE1UEneVZILNv2s1JFJTtJERb4B/CKlrE2MO2Q7FHFa+mDYMy9/NxKlxw93qPe/LYf258d3htX7xcT4nD2alemtrDdSG2lDbT0FtSqA2JVCbEqhNCVxRSwlcv00NXC1QiW7XppzqsjYlbbi90x76rISK6+6qgKs8K9HtmuLeb1/u0+hyBftUl2DD/RKU6cqaVrtz4F4winS389BvX+lToadOwg1OWgUb7qqmiJ13oU2bfWCu0PbvusGLbsHWa31XV6Ln/qS4G64q9LO9G29Q6Lr3Mt/p+9xSwMGbvjt99/hWwv0WxEFfv+2Db7Gpnz58gUXNGaQ+1TnUJDY9vKaPXj3+qTEg6evBAGkcm9Jetg42+2TYV2aY7DfBOutRQ6RJmLpnYJIyBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5H/HPzOmiC5Gvc8bAAAAAElFTkSuQmCC"},
    {name:"Bbccom/news",
    src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcVExMYGBcZGxgXGhgXGRcXGRcYGhcZGRcZGRoaICsjGhwoHxcXJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHRERHTEhIygxMTExMS4xMS4xMTEuMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKIBNwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAAMFBgECBwj/xABDEAACAQMCAwUFBQYFAwMFAAABAgMABBESIQUTMQYiQVFhFDJxktEHI1OBkRVCUqGxwRYzVGJysuHwJEOCNESjs8L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEAAgICAgEDAwMBCQAAAAAAAAECEQMhEjFBBBNRImGRcaGxMwUUIzJCgcHh8P/aAAwDAQACEQMRAD8A7DAO6PgKcxWkXQfAU5QxIxilim5Xx06npWynbfaigs2qLunHOwZNIC505xk0c6nOc/lVW7V8PeeRWjYAYKnHXOf+9XBbJkyT4HxdZZHjznSTg+YBxU5VO4JwBreRTzNive1bnPp5VZriQqmQR8ac47BOkFVmo6xvDIcHbG5o4ONt+vSoaaGmb4pYrNKkUYxSxWaVAGMUsVmlQBjFLFZpUAYxSxWaC4pxKK3jMkzhFHifE+QHUmgAorWvL9fDH9N/5Vz3iH2pRAkQW8knkzEIp9cAE0Pb/ahJ/wC5Zbf7ZDn9CtLkNRbOmBN6wI9+tQXZrtbbXndRikn4cg0t+Xg35VYaE7EaFKwqYpylTAbYDHWorhN3zZJVLe650gHquMZ/WpHiB+6f/i3/AEmqZ2JJN03oh/qKqMbi2Jl501qU9acpVIxsp45/83+tY5Z8/KnaVADejpv0/nS0etb1Cy9ooVdkOru5JKjUNIUNq28DnH5UASzpnxxsf+xrJT/z86iZe0MSrlg4IzldO4xoyTvgAcxdyfPypuftNCrEZJCnDEYOMq5UjGc5MbLjagCb0+taCM4Az08aix2hiyBpffGTpwFJ0dcnw5ifrRM14wuEjGNLI7k+OVKAY9O8aTY0n4DVTHj5/wAzSpylTENwnYfAf0reuWWvaC6CDDg7UWO2VwgGpVNVw+5P1fB0bArDqDtXN5+1s8nQaR6Ud2P4i7TnmOxyuNzt1pqH3Fv4LsjHG64PxqB4roNwgLEDGe6cDUD41KhHD516lbw8vhVJ7TRyGTlxg5ydJHXHjmrjrYuwvj18oLM0xyBhQDsfjTdp2haWExRJl8eJqp8tkkCudROxB86ykzRz7Loxtttmo5tsvgqLRwnjrFljfunOH9B5VcBfIGC438K51wdla4BkPiSSfEYoLifaJ0uJNDZCsQnpiqlJJKyeLb0de5w2z47U9XMOC9tX1LzV1DxxVm/xpCY2bBBHQHG5rJuL6K2uy1UqpPBO2DzzInLAUnBNXagYqVKlQAqVKg+LXyQRPLIcKilj/YD1J2oAB7WcdjsoeY41MTpRB1dvL4edcrvXnvZOZct/xjGyoPICsz8Ue+naeXw7sSfuxr6evmakrKGufLl46R2+n9OpfVIZtuHIo2UUQ9opHQVIpDWSgPhXE8jb2z0VCKVJFdn4coOpdiNwRsR8COhqxdne2LwsI7o6ojgCT96PwGvzX18KYnhGKhr6EbqRkEEH4VtjytPZz5vTxkrXZ2NHBAIIIO4I3BFb1zT7Le0Aj12c8nuktEzHbT4pk+XUD410E30QTXrXR/Fnau6Ls8qS4umLipxDIf8AY3/Sapv2fEm4k/4f/wBCrPxe9jNtI6uGUqygg53O2P1qi9lOLJbzO7glWXTt1G+a2j/lZJ0+lVfg7XWzKx1EafAjBPw86K4Jx2O5LCMMNIBOoY6/nWdMLRL0qVKkMVc++0riTWTWyW8UID8wYMSNjJQHSNuuo5A610GonjvZ+3u9BuI9ejOnvumNWM+4RnoKAKC3ELh5SrNAS8atlrNdbnKBUfLaRuR1bbT0oWHjl0ZYkPs4E0TSlvZlGMCQlTqYBvcYZJA71Xn/AAVZZzynyfHn3GT/APk9BWG7DWJxmJzgYGZpzgdMDv7D0pbAqv7TuhFzI57ZoxHK+Vt0wDGO4gw5B1cptxsOX47U79nXaKe9u8zlTojYLpXT7zJnO+/QVYl7CWAGBA2PLmzY8fDX6n9TRvBezFraOXt4tDEYJ1yNt8GY+VJpsuEkrv4aJylSpVRBxS2xpHe3xW5Kkd6oQahiik1MOtXZoGRuQcA1ZOxIWSbQ5/dJ8vEVS5gR0aiODcSeFw6nvDpSU1YNaOuvPHC4j1EltgM5x9KF4naKziTXpdRsfTY4rn57RyM+qTHWm7vtRIXPeGnG1P3IryYcZBvaS8WYggYkBwSPQ9agbtCG1F9R/pTM987Pr9c+lNTXAbLNsxP5VhKabZslo3uL5nOCdhtt1ofkLnqc0wwI3rdGOelRzbHVDtsWBwN6NuI20b9aYsZtLZIzRks5YbirhVDYT2ZlkjkTTu2pcDz3rs0RJAzXF+D3XLdHAzpINdBg7XxtE7EaGUbAn3tvCtktGc+y10qqfCO2kUzhGQrt7xIxmn5O10YfToYrq06wRjrjPwpcWTZZa5/9tN+UgjiBwJGLN6hAMD9WB/Kp3iXa2GJ9IVn2zlcY+Fc1+1zjC3MluUyFEbEg9QS5G/5KKOLGnsH7OplKstr0qA4KoSNfgKl7NiwJBwPM+FeZl3I9nFSgiURTW+ioM3+g93v+u/8AfrUj+0Ty9eKwao2UrHp0OKiL0U2eItIw75jHmfGnL87A6g3qpyKpJi5IqHF3MU6yDqCDVmXiT6FAclPeC+G+/wDeqz2pXdT55BqR4E2qBPTI/Q16vp39KPI9QvrZPWt4xRkLEKcnT4ZoVgMVolK52U4O9dJgMs6g4FWfsJxNIptBz95hPgc7f1qmJqJ3qzfZ9w1prkM3uxd8/H90fr/SplVCZ1elSpVkMVKlSoAVKlSoAVKlSoAxSrXWM4zvSoFaPPUNxq/Kj4DtQItwOnjRMRxU2vBul8m15w+RCD4NTGgqfWm5b2QtpP5Gk7Hz3rnakjWUYroc947008O9by91c/yrRzkbU0nIXtvsegyRQ87dadXI2zTTJq6b/CiSIaoxG4xW4cbAbmn+HRaDmVDj1FF2ot9TMc+g8qlSotY5SVobsBvvRTDrtQpeIEFT8c1veyA4KmtVPRLxtGIpgpp6a6DL0x5UxLGxXuoT601b3JjfDKM/7vCpeRx0gULYbwqQLnNHjcYHTrQlpyy2osADvt4VJ2/LY+/8PWtseXWxTxNMCkG1QHauzOmN/PKn+o/vVnnQA4FRXHrVnX9MD+pqsmRJWKGJydIN4TaFo1H+0f0rEnA2nGGcjfYZ2H5dDRXCJgABU1EV8K8uc2pHqRhcURkFisK464XT6fH41rHvG2BR3E2Cpv1OwqL4VxKIqwDBsEg4PjU7ls0VRMT8OW4j0nbIAz5Y8vKhoOA8oqFyOuTnr8RRvAbxJCQrAgnYjzqWmfAwetDk1oXBN2UjtlZaVBHQH+tOcHIWJVwRjr8Tv/epHjBV2CncHFMFAMj1rt9LN6icPqsaVyCI4wRnNO+zKwIzvUeHI6UVaxlz1x8a77OBEZKpRiDV2+zG7RHlDsASFxnxwTmqpxWEhs5B+FN20xUg1Mhvo7Ul9GTpEi58s0mvowCTIuB13G1cj9pPXNbrcJhi3X+tJQRGzp8vG4QCQ4bb93fNQ83a4Kfc2qoWfEBySfGhDPrOSfDpTSQU/ktrdtGOdKAfHxo+37YxafvFIPoM1zwYzvW8kgAoaQKP3Oir2xt/HUPypi+7YQlCI9Wog4OMYrnskuOm9YHTrSpD4v5JB+MTq5cSMSdsk0qCRMjrSqrDhEhVuN96e1CmeJQcsgddhW1pEXArkd8qN7NpwMZI3oUb+FStzYFRk0FJHjxBqZpoLAHck6Tv60QIyAO8KwxApsOScY+FO21o3i7iwiRhsM1tDKIW3PwoEg56b0+Y8YzvUpWyIzSdsfueMPJ3c0PaxDmLk7HrSKLqz0oowqRqB6VaSXRby70FW1vBHMSTqT+E+dFS3sJfCxjbp5VA3iYAYk0NFL36n277Zp7kWuixftI50gjaom8mMjlmrFqGdzgbVM2FmmBrXJ8qpY0noyyTtIhIboKSuKPecx6D50a3D4+aTyxuNqF46qEqnj4Vtw0DzbQZHxUhgBg58ada4OoKxyxBP5UPbcH905+NSBsMPqA6edKWJNMXvU0kBWEhDCrBaSHOKrjd1yPI1NcPkDV5eWLTO/FO0GXgVxht6Yi4fFgDQNt/hQPFhIR92yqemWz/AGoJOHSYyZsk+IOKcVrRT2yYt4ljY4rN/J/OomyhkU4eUMP+P981JXZwg+JqZDToiJjmQVoZN9ulK2OqUfn/AEohbNdWVPxrv9NCtnnepnehbH4U5qB2FMm1IPU09HFg7ius5LAr4HO1aRbetSE1t/OsrGtKir0BiWsnT1NSDW6HwzWREg/c2qqJsjTIACBTVkdJJc48qKuYsHAFBSxEnekA8d9wdq3ABGSelCSt3SB4UPbSMTg9K4p5ZqeheSUG3TcGsomc52oV5N1A2py5cgZFae7Kh2Fx0qjra6yMmlS98XJEbxWVmwaO4VKFUZ61GXIO1bxyEDBFF1suyRuuIFjjOajyxDHwNN6N8jrSNu7H1qLb2McGD4ZpzYAEjf8ApWbKPcjp4U5JBjfrQ3To2jCXHkjMCB+gp+VNgOmK1sJRpxnFNznV41FyTKUIuP3NZoF8DmtoyQCANqE0NnAOSPCioJCMAjrVqRlFeDdHBGCP1piK2XOaIWMEnB69M1gxHSBVpmlND9uUQ58cdKfg4uuMAD40JDFnY9aFe0dTjpvRbs0gotbRYmuQwBGM+NRPE4jzVP50cyJhQjZOB+tNS7kBve6fCrjk0Zzxb0SthKBjOc+VF+0jfy8qgtUiODjoOtZLvsc7Z3reLTRhOLT2NcYfDawPQ/2Nb8Putsg9MGneILqi1eAYA/Ag1DEFN16Vw+oinKjqwtqNlrzq8djSPD1O+SKrtrxQr16Uc3aNB/2rm9to6lkiSksKqNqjOJ3Gdgen9aBuuOhxhQa0sQSC7dPD40cGtsTyJ6QXw4FQ8hPQY/uaXZa+DO4Y9Tneg+I3XLhKkHL94eo6f2/mKr1lOVcEHG9ejiVQR5eaX1nSroqMHIp5tLDaomMZQZ36GnX6d01siWZuHwOmTWkMmN6Elc7ZBpq3Y6tJptgkSHtQySopyOTbJNRlxJg90U5C+OtTZVEleR648r7wqIZv4vDyoqS5wMrQ91vuPGix0ZjhXeom8ZgcgbZ60UJCOh3odtlIPic1HGN7DiFAajkCtpnbSfDam7SfFacRuDggePhRyiloigWJGPlSp6MtgYFKuHIly6FwQIkgxg1sHGMEZPnTejYHB3rNras5O+AK2c/k0jG+jeS1PvAjHlWIpHB2rUl4+oP50bw+1aUHbHjnNTzVGig7pDdqoOc/HNPGImmmQK2OordbpBkEH0o5Ras1inpGsMIJx0NH+ydzYdPGgbVD1NOXVyVXrWTbbOhKKH7W2UnV0NOuyxZbY1HWpLnc4FPSqG7paqct0ZpJGIblX8N/CthOEJHX0oQxCMjHXxpm4Q9cHPnW2r2JBsLMxHhWAxZiuqg4bru49akEUDBUVVC5fAFGGEmATtT165GCDv1NOROQ3u9fGmLkKAS7YoVN6ByfciRsZzIvffHl60Nc3egEZ6VC3XFdtKdB41HyTlsknOa1hjad2c+TMn4sv/YiXnRSmTcM5TH+0KP7kmmeM8MMLeJQ+639j60H9m0p0yp5Mr/qMH/prollAkq6ZBkHqKzzQ5Bim499HLZbXNBmAg4xmugcc7LmI6ostGfzZfT1FREfDxqxpJJ8MHP5CuVycdM6lBT2mQVtbZ69Ks3CeGGQBmGIh0Hi/wD2qf4H2WUfeXC/CPy9X8/hUhfKvRR6bVUYuW30RKajqJzT7R5NLxADGA/6d0YquW8qg5238/Cpf7RZ9dyVB2jUJ/8AI95v6j9KrGK711Rwz2zo1jKDEu/hRcj4UH061zi2unT3WI/PapW24+2wk3HpTVBZP3Tu3QEimQ+Tt1rFpxdG90/lQ0r5YnO+c59KqUUvIKf2JTYj408VwOlQ8cpXbOxNE6JCdjt4URx8hSnQ9g5wR8KUgIcLnFaWqyZOrwrWCTVINXhWUoyUnZqpxaVGvK7xzTckBO1PSgiXboTUibcHGPzrJlkHGhBrEqE7YzUtLZsCTpx5UzChDAkUvBNA9nbOfAj41ipzV+VKoofFFPBJwAacgEitscf3pu2hc4KipC0tncqoUs7EgKo3PwrDNJpNo7v7PwQy5ksml+P3HZuGXMyJhNpCwRsjDFc6hnO3Q9fKnLXgV0ERtIw4Ur95GpYMcLhS2d81a+CyXUKRI1nMyIHyNA95mJRl36gEg/Gh7yC5eGNFtrhWjjjQfdRFSyHIOvOsDPh6VK1Hz+DqlixrJqquru9W/uV5uFTMFxE3eZowcr7651L18MHfptW3DrB5ARHEG0Y1HWi4JJA3YjOcGrZPc3JLabKcAoSg0juTNzNb9eh5h/QVD2HCJlhliltbgiTRuiqSNDE/vnHjUtNOldfobQx4uDcqT1W77e/PwR8fCrhg33WNLaG1Mi4bGcd5hnY52oSbhEpOkx/uCT3lxoPRs5xVwd7hldTaXC6nVhpjjkwqxqgDczoe7nIoNYroW4i9jm1ghdegDMSvrC/Hw8qtJrq/wZqMHdqPjz+/ZDfsW4jbRygG37okjY91SzZAbI2B60xYcPknJaNMgYBYsoGT7oyxAyfKrZcCZpxKbW5Iy+V5MKkBkK7Mpyx3/eNR8fCX5Rha1uymtZAdMerUF0lSM4xjG+djTblytCjjxSh9VXrz1t35/Qi7Xg07ZPJJ0sUILIp1qMlQrMCTjyzTE/CbpmjVYyDMNSAle8AMnx2288VZryW8YEpZur80yKzxq2kcsINJPR+71x409a3N2ixg2U5aNY1VtIypGBNjf95QMU7t9v8ABPtpR/0/pf8A2VCPgUypzDGAo1gkvEM6CQ+AWycEHpRD8LuAxQxEFQjEMyABXOEOScYJ2qevYriSHl+y3KnMx/yYmB5js4yzHUuAcd2neJyXM0c0bWU3fCKjFRlFGgsrb9MqSMZ60SbfyEYQvqPfz1tb7K5ccCuwcCNV7urJkjwq7d5jqwo3G5qucT4PMrsspAYdRnPqNxsavqwXPN1i2uFBhSI6UjY5UAHUr91l9DQPFuD3EkjNHZSIpx3dAG4ABOF2GTvgUpZckF9P8GuH0vp8k6zNVV91v8nNZEIJHltWM1YbjsjfliRZTYyf3Ka/wdxD/RTfJXoxlcU2fP5YpTaXVkx9lI1Tyr5p/Q10CN+USScAbk+QHU1T/s37PXkF1qltZEQow1MuBnbAq49oeDzzo8aIw1DBbGB8PWpl2OPRzLtT2nku5yNRWJT92oJA2/fPmx/lUc15Igysrj4Ow/oatnF+wsqW/wB3byPKGBDKuS3mDjouKiuG9kbx5ohNZyiPOW7hwMDOD6Zp6aBOvJZuwPa+S4XkXBy4Hck/iA8H/wB3r41bJECqXPRQWP5DNDWnZRVGrlaXOMlRg+gpjtLbXS28sUcEkjNHhGQZ6kKQfXBJrPtlWjjPErgyyvIerMzfqc0KRU+eyHEP9FN8lansfxD/AEU3yVqZEEKwanR2Q4h/oZvkpf4O4h/opvkoAg1YjoaNtuKsuzd4etH/AODuIf6Kb5Kwex3EP9DN8lNMVD9vxGN8eB9alPbdIB2qC/wdxD/Qz/JT0PZjia//AGc+PIpmrWRraE4p9h73rZJB60zayjmAt0B3o2Hs1fEAm0lHmChrB7P3SypGbeQM+rQGAXVpGWxk42FY5ZycW+zf0+ODnGLdJvbCBexhiSCQehwaL4bfxqe+SMDO6t0PQ9OnrTsvZm7aFENrLrTXjBi0EO2rc68jHwp+Lgd3zVdrNymhYnXVFllEYVsd7zGR8BXD7uR9x/Y9t+j9Lup/PleOvyGDiUD5UMS2OgjkJ/TT03FRLTRO+lD49MEH+Yo6z4VerLNI9pJ94CBpMR095WAwZBkALjrUPe8Du4cyPE8a5I1HR1JyBhWPlTU8jaVGc/S4FCT5K0k1tO35RORWpwc70qgoeLTjAYZHwpVrxkeXyRDcPutsVYuxRPt8GTnvn8u41U61OMEipjgXFltJluWQuEOoqpAJ2IwCfjWEo1JP7r+Tr9LNu4/Z/wAHWu1HFyJrNIJRvd8mUKQekDuY28j7hx8KpvAeJXjcPlunlvtYtp5Fkc2/s5dQdJQKOZnbbPkaHh7X2jTxXi8KmLzOyxvzhoeYKEY6NWgSYIGogHFRsXavhsKsq8OueW0ZRgLqV0CSJ3lwX0qcN6EE7V3nmEq3HrqOO40XF1tYmf8A9UkaPzeYg1wYQaowC2c/xCrF2v4jdicxWsuljY8xQWjUGQ3Ealgz7ByhYLnbJqD4h22tsCSThjsEhEOnnxORDMEwrxqxOGwm7DO486i+HdqLAF7deETsZgkTLJIznTqHLTVISUQHBGCAMZoAnp+0j21peK09ykwMKIl4seuEzEpzFkTuyJs7eminOC9pZJIrRFueYy8QNrJKuk86LRK6E4GMFdHTxU1WbLthYI4K8LuHeNxJqaV5W1RhlBZmJ1KupsA5AzTvGu2FjKRJNwucGYxzBlmaPWyK0ccilGGDpLDb0z4Uh0W7tnd3B4isML3fL9mEhSzMAbVzWXU3O2xjA29KjbjtLcWl9dGWV3t0jEUaPpLC4FpHMg7owWc8wfGqwO1fDpDtw27Zo0bJW7m1LGGLtqYPkqCSd+lFXHbzh4UGThk2l3imBeQnW0AEcbgk97ATSfA4Oc70wLx2Kvbk8MuGuJWeeJrpC5xkNFqAxtjYiqbc9qr0WCRC4YXUbGaSTA1NbGOORD06Ezouf9hrNt9q9lHHJGlhKElaV5BzQdTSklzk7jJY9OnhQT/aFww6geGyd6GO3Y83cxRkFFznwwN+pwM0CLNxzte0fFgvtQWKKWC3e3yv3nNSTmS9M9xmiHX900dHdXovmsTIxSNzeGbK63tTnlwH1MgZSf4Vqpp2/sJIJ4hwyRopGaWb70ZLOwOrWTqB1AYAPhtRSfatarL7UOHzamQQa+YCCqHWE32yC2c9d6AJTh/ELlYLLiBvXc3M8UcludHJ0SuU0RqFyrIMHOcnSc0H2a41dNPalri6PNuZY3EqJ7K0aNKAsT6MmTuLgZ6hqg7Tt/wyOfnpw2QOGLqOaSiu3vOkZOhGPmB40RD9pfD1jijXh8oSKUzoOb7shZnLZzk7u2x23oAv/H2luOIJZpcy26LbmctDoV5HMnLChmB7q9SAN8iqrD2qvUa1cyGVIhd+0AADnRQTrEZQAPfCtq266TUd2g+0eyuljkn4dMcF1jkWXlMNl1qHQhsYZcjONxWlp9pvD4zGY+HOvKjeJAJFwsbkF109DkqNzk/rQBc+F8alk4Jc3QlLOFvGjk2yAjy8sjbwAX9KPtOIyG8sozISslnJI67YdxycMfXvN+tULhf2qWMEPs8PD5BF3+4ZFYYcksO9nYljtQNr214XGsipwybEkZibM5YiI9Y0LMSi+i4oAt/F765ivHknnuY4RPGkbwiGW2VDoXlzp76uzNgsemoYq49srlorG6kjYq6QzOrDqrLGxUj4EVx6bt7wtpeaeGzasqxHOYI7pjQ7xhtDsMDcg9BRsX2o2KwSWw4fLypObqXm51c0sZO8dxks3Q7Z2oAl5rq9Xh7yLNfJK/siI9ybYpqlmRWMQjGcd797wIra27UXNxdWASUrGoWK5VcYa5McxdD/AMeTn/5iq3ZdueGopVbC4KkxnS11I4BidXjwHc4wyr08sdKfT7SOHI+teHShua1zkSgffOhRn2ON1Y7dN+lAEt2J49dB7OW4mueVMkpkafktDIyozqIeWNaHuk9/GwNa9l+1txOblVvEeSa3knhVmjC20iyyARMSMDuNGe95Gq1bdsuExrpXhs5GlkAa5kcIrqVbRqY6CQSMrg70fe/aPw2VY1k4Y7LErRxjmAAIyaGU494EAbHPTPWgCcS/vBFLBHPeJclYX5VybcOycwLK1rN7hLbgKeh6U8nFriGCSeOe6c2cqvPbXSxrLyHTvIXXZ8Dvq3piqlF234UqOn7MlYOFUl52dlVTqRUdmLRhTuNJGDRNr9ovDo4JYBw+YpMCJdUxd5MjT3pGJfpsN9qAOiQzXMfCJ55pW57Qz3Axj7nKM6Rp4dwaR8Qaplx2pvPZ7eHnkXEUoNzIMZaIyxLFnbbWLhPkNK7+1+0khaF7GQxuhjZeYoyjLpIyN+h61HTfaJw1i5PDZMyCFXPNwSIGDRDY+BVfjgZzQBZeJcRujBe8QF7IjW08kcduNHJ0RSBNEilcszjJznI1DFPPxu55zWPOfnSXsZRttS2ckfPbHooR0zVQu+3/AAyWfnvw2QuWV2HNIRnX3XaMHQ7DzI8BRj/anYm5W7PD5OeqGMScwbKc7Y6eJ3xnegCy9gbm5nmDyvesgkuF1E2/shVHkRVIxzNsAf8AIeVWTtB/9fYfG4//AFCuVcN+0DhsEolisLhXDO+PaZCmp86jyy2jfUT0qzdnO3MfFOI2ojhePlc4nUytnXEcYx/xoAn+JcXuZp3hs8LoyCxC5ODgklgQBkEAYJOD0oWLtRJHOyzMCg1ArpA0aSVDahue8N8/xDyNG8U4DcJM01nIFL5LAkLjO7dUYMCd8EZBJ3oWz7KTOspnZNbDunOvvamZixCqADq04A6Vyy53q/8Ag9WH934/VVUv1vyCWXa2UxuruC5MWltKjBZkLpjoRpY4PXY+VH9obtn4bFI+7MYyTgDJIbwHSmR2QfkjZOaH1adR0lRpCgvpzkaQc6fEjxontJaGHhscbEFkMakjoSAc49KrGp39XwZepeCv8L5/9/sU2JATknHpSpuQld6VXZy8SkxnbbenZ0LQOFUk77AEnwqZ4Q6wRnYHO++M1aOxd+uJDgDOnwH+6sUuU+P7m0JPDH3O9V+dHPuCcZMAtkkgkZImd3XGMsZA8bJnxGMb+BND8Vu5JbdIUilXBQtsdL6LaGIZA696JiM+BFdNteNXGe+Buy47i9OYykbDbugdc9c1m247PsNJZi0erWgjUZDa0BC5ABA33+O9dbhI4+cSh/tQZy0E5BWBSqwpEVMQjBcSoeY/+WcAke94YFZfjrBo+XFP3WtteEKa0hkmdhjWx7wlUYJPu7muj8L4pKzxmRsAxlmXQoGvVjGcZ6b0M/HrnU40DGZSrCPPdEqqu3iwXW3rtRwkHOJQ7bjgEole3mVg0R0Ih5WmNmOFTWoUsCMk6gDnY5qI4pM87Qssc2I10EMhIAEjMCuCfBgCMD3fGuqSccuABoGoEuFZogCQulgzLgY1DWvQb4qa4XxUtGrSABmy2MAaQSSoI8wMCjg2qGsii0zh3BpntpZHaGQh0aPGkjIZ1LA58CqsPzqYt+MqGj/9PcBIgEUBScxLIWCNpdeq4zuRknINdj/aK+n6Coy+41KJSsaDl6SNWjV95gsD193YDp1PWmoteRSyRk7o5LLeCKNAEkRmi+8ljTLxuGVUIzjDctMNhhvI29RvE+OLJJERGRHG5kaM4w5MhckgeJU4OfWuy/t+URuugNKRHoxEQveVS5O+O6S22R0rT9vXDE4hVRpJUmPJDLEGKkZ8XOAfjTUX5Jc14ORcR48HhkhUysXCAyPgM+mRnCuAx2AbA3/IVvwzjEMKctVkOdZ1Ed6NnWIdzQ6lv8txnUuz/r2Wx4zLzgskY5enGvQF+8ADHx93cjp1XrRl5xLdQpRQScsdIxtkbn86Uvpi33+g4yt0cNm42kmUZXWIqwwiKcObnnBwpbqVAXdtvXxKbtDETkrMBzHdAo06NTSEHaQBj94vQK23vdK7j+0YwBiSNz6aST+QqATtHMz6TCEGsrvHk6fu8d7OAQGc56d2hK0Jyo5g/aWIsSI3GcnXpOpSVtwxAWUMdXJfOX/f3zvTS9psEBUdVBjOlQFXCzSPJgZ21K4X1xg7V3C3vgqgMQxHViFBP6U5+0U8h+gquAuaPMUiksSFIBOwx4Z2o+54dMketoJFXbvFGA36b4rvF5xyVZGCICAVCryjhlJTLGQbA7uMY8OlDv2iufwR7pHuZHMySOp3XSAOnU0uLDkefliY9FY/AGs+zv8AwN8pr0GnH5QrBowH7uCImYY5jK7bbMQoU4zvWG4xclWI0jCFlBi95tbAA77EqFbHhmnxDkcKsOHTODohkbHXSjHHxwKDnjYE5UjG3Q16O4TxiQvKsuMKSFwhTIyd84wc+hqQHE4j/wC4gPiGAX+TYJ+NKh8jy7yz5H9DS5Tfwn9DXpLj3GjGitAEfvd7C68rpJwuP3sgddqZ4VxeSV25mFCMcBY8KynIAJbckYGcedHEXI858s+R/Q0uWfI/oa9RftBPIfoKx+0E8h+gp8WLmeXjGfI/oa10mvR/EuMSJKojjVkIXJ05IySD+mx+FBDj9ztmEA97bl9fFcncAYwOuc+FHEfI8/aT5Gta9CNx651f5CEZIxo6d5QDnbIwWrKcZnIBwP3s5hwdjHuBnJ2Zzjx0UuI+R56qW4HJMmpoGdH2CtGxVt85AI36E/rXduGcZlaTTLEoTBIbRpOQE6g9M5Jx9Kll4jH0ZlU+GQAPmO1HEORyzhPFp1jhEzcQZ15nNImmw+rPLxiUe6MeA6U3a8SuOY2qXiLJykXCyzArNjvyHM242zjOO902rq03EUAJV0cgZwpXJ28s1AQcfmcorARlmdWHKbKr3tDBicbYWjiHJFSm47JzGaM34TlSAB55ziUurRkgSZ0qutf0pix4vcSzuZHn5W2iOWSVwCFG+Hdt858fGuoR3wAAJBIAySBk+tRHay8UweHvL5eRpTjaLx5EpdFZLA9QaxTCXX5Uqxo1srNwdh8K2s7h1B0uy/Akf0pUqIf1Cp/0woX8v4snzt9ayL+X8WT52+tKlXScYvb5fxZPnb61k38v4r/O31pUqAEL+X8V/nb61k38v4snzt9aVKgEZF/L+K/zt9az7fL+K/zt9aVKgBC/l/Ff52+tL2+X8V/nb60qVAC9vl/Ff52+tL2+X8WT52+tKlQAhfy/iyfO31rPt8v4snzt9aVKgYvb5fxZPnb61k38v4snzt9aVKgRr7fL+LJ87fWs+3y/iyfO31pUqaAQv5fxZPnb60vb5fxZPnb60qVIBe3y/iyfO31rb2+b8WT52+tKlSAXt834snzt9a1N/L+LJ87fWlSpiYhfy/iyfO31rHt8v4snzt9aVKgYvb5fxZPnb61n2+X8WT52+tKlQBj2+X8WT52+tbx38uf82T52+tZpUAOe2y/iv8zfWnoLyTP+Y/zN9aVKgAhrp/42+Y1hbp/42+Y1ilQA4bl/42+Y0NezsY92Y7+JJpUqUuhx7Igsc9aVKlWRuf/Z"},
    {name:"Bbc news",
    src:""}
];

//get-לקבל
app.get("/api/get-news",(req, res) => {
    try {
        res.send({news});

    } catch (error:any) {
        console.error(error)
        res.status(500).send({error:error.messag})
    }
});

//add-להוסיף
app.post("/api/add-news",(req, res)=>{
    try {
        //מעביר מידע שהגיע מהקלינט
        const data =req.body;
        console.log(data);
        news.push(data);
        res.status(201).send({ok:true});

    } catch (error:any) {
        console.error(error);
        res.status(500).send({error:error.messag});
    }
})








app.use(express.static("./client"));


app.listen(3000,()=>{
    console.log("server listen on port 3000");
})
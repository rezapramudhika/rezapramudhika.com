import React, { Component } from 'react';
import './index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row h-100vh bg-black p-first'>
                    <div className='col-12'>
                        <h4 className='text-blue raleway h4'><strong>Hi, </strong> I'm</h4>
                    </div>
                    <div className='first col-12 animated fadeInUp'>
                        <h1 className='text-blue montseerat ft-w700 h1'>REZA PRAMUDHIKA</h1>
                        <p className='underline-white'></p>
                        <p className='text-blue raleway'>Full Stack Javascript Developer based in Jakarta, Indonesia</p>
                        <ul className='p-0'>
                            <a href='https://www.linkedin.com/in/rezapramudhika' target='_blank' rel='noopener noreferrer'>
                                <img width='30' alt='linkedin' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNNDE0LjQxLDI0LjEyM0MzOTguMzMzLDguMDQyLDM3OC45NjMsMCwzNTYuMzE1LDBIODIuMjI4QzU5LjU4LDAsNDAuMjEsOC4wNDIsMjQuMTI2LDI0LjEyMyAgIEM4LjA0NSw0MC4yMDcsMC4wMDMsNTkuNTc2LDAuMDAzLDgyLjIyNXYyNzQuMDg0YzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMTAyYzE2LjA4NCwxNi4wODQsMzUuNDU0LDI0LjEyNiw1OC4xMDIsMjQuMTI2ICAgaDI3NC4wODRjMjIuNjQ4LDAsNDIuMDE4LTguMDQyLDU4LjA5NS0yNC4xMjZjMTYuMDg0LTE2LjA4NCwyNC4xMjYtMzUuNDU0LDI0LjEyNi01OC4xMDJWODIuMjI1ICAgQzQzOC41MzIsNTkuNTc2LDQzMC40OSw0MC4yMDQsNDE0LjQxLDI0LjEyM3ogTTEzMy42MTgsMzY3LjE1N0g2Ny42NjZWMTY5LjAxNmg2NS45NTJWMzY3LjE1N3ogTTEyNy42MjYsMTMyLjMzMiAgIGMtNi44NTEsNi41NjctMTUuODkzLDkuODUxLTI3LjEyNCw5Ljg1MWgtMC4yODhjLTEwLjg0OCwwLTE5LjY0OC0zLjI4NC0yNi40MDctOS44NTFjLTYuNzYtNi41NjctMTAuMTM4LTE0LjcwMy0xMC4xMzgtMjQuNDEgICBjMC05Ljg5NywzLjQ3Ni0xOC4wODMsMTAuNDIxLTI0LjU1NmM2Ljk1LTYuNDcxLDE1Ljk0Mi05LjcwOCwyNi45OC05LjcwOGMxMS4wMzksMCwxOS44OSwzLjIzNywyNi41NTMsOS43MDggICBjNi42NjEsNi40NzMsMTAuMDg4LDE0LjY1OSwxMC4yNzcsMjQuNTU2QzEzNy44OTksMTE3LjYyNSwxMzQuNDc3LDEyNS43NjEsMTI3LjYyNiwxMzIuMzMyeiBNMzcwLjg3MywzNjcuMTU3aC02NS45NTJ2LTEwNS45MiAgIGMwLTI5Ljg3OS0xMS4wMzYtNDQuODIzLTMzLjExNi00NC44MjNjLTguMzc0LDAtMTUuNDIsMi4zMzEtMjEuMTI4LDYuOTk1Yy01LjcxNSw0LjY2MS05Ljk5NiwxMC4zMjQtMTIuODQ3LDE2Ljk5MSAgIGMtMS4zMzUsMy40MjItMS45OTksOC43NS0xLjk5OSwxNS45ODF2MTEwLjc3NWgtNjUuOTUyYzAuNTcxLTExOS41MjksMC41NzEtMTg1LjU3OSwwLTE5OC4xNDJoNjUuOTUydjI3Ljk3NCAgIGMxMy44NjctMjEuNjgxLDMzLjU1OC0zMi41NDQsNTkuMTAxLTMyLjU0NGMyMi44NCwwLDQxLjIxLDcuNTIsNTUuMTA0LDIyLjU1NGMxMy44OTUsMTUuMDM3LDIwLjg0MSwzNy4yMTQsMjAuODQxLDY2LjUxOXYxMTMuNjQgICBIMzcwLjg3M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiM2ODY4NjgiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+' />
                            </a>
                            <a className='ml-3' href='https://github.com/rezapramudhika' target='_blank' rel='noopener noreferrer'>
                                <img width='30' alt='github' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjQjJBRUFFIj48L3BhdGg+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiNCMkFFQUUiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjQjJBRUFFIj48L3BhdGg+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjQjJBRUFFIj48L3BhdGg+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiNCMkFFQUUiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiNCMkFFQUUiPjwvcGF0aD4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjQjJBRUFFIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjQjJBRUFFIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" />
                            </a>
                            <a className='ml-3' href='https://www.facebook.com/rezapramudhika' target='_blank' rel='noopener noreferrer'>
                                <img width='30' alt='facebook' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwOC43ODggNDA4Ljc4OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA4Ljc4OCA0MDguNzg4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGQ9Ik0zNTMuNzAxLDBINTUuMDg3QzI0LjY2NSwwLDAuMDAyLDI0LjY2MiwwLjAwMiw1NS4wODV2Mjk4LjYxNmMwLDMwLjQyMywyNC42NjIsNTUuMDg1LDU1LjA4NSw1NS4wODUgIGgxNDcuMjc1bDAuMjUxLTE0Ni4wNzhoLTM3Ljk1MWMtNC45MzIsMC04LjkzNS0zLjk4OC04Ljk1NC04LjkybC0wLjE4Mi00Ny4wODdjLTAuMDE5LTQuOTU5LDMuOTk2LTguOTg5LDguOTU1LTguOTg5aDM3Ljg4MiAgdi00NS40OThjMC01Mi44LDMyLjI0Ny04MS41NSw3OS4zNDgtODEuNTVoMzguNjVjNC45NDUsMCw4Ljk1NSw0LjAwOSw4Ljk1NSw4Ljk1NXYzOS43MDRjMCw0Ljk0NC00LjAwNyw4Ljk1Mi04Ljk1LDguOTU1ICBsLTIzLjcxOSwwLjAxMWMtMjUuNjE1LDAtMzAuNTc1LDEyLjE3Mi0zMC41NzUsMzAuMDM1djM5LjM4OWg1Ni4yODVjNS4zNjMsMCw5LjUyNCw0LjY4Myw4Ljg5MiwxMC4wMDlsLTUuNTgxLDQ3LjA4NyAgYy0wLjUzNCw0LjUwNi00LjM1NSw3LjkwMS04Ljg5Miw3LjkwMWgtNTAuNDUzbC0wLjI1MSwxNDYuMDc4aDg3LjYzMWMzMC40MjIsMCw1NS4wODQtMjQuNjYyLDU1LjA4NC01NS4wODRWNTUuMDg1ICBDNDA4Ljc4NiwyNC42NjIsMzg0LjEyNCwwLDM1My43MDEsMHoiIGRhdGEtb3JpZ2luYWw9IiM0NzU5OTMiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNENkQ3REEiPjwvcGF0aD48L2c+IDwvc3ZnPg==" />
                            </a>
                        </ul>
                    </div>
                </div>
                <div className='row bg-white p-first'>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-2'>
                        <h3 className='text-steelblue montseerat ft-w700 h3'>About</h3>
                        <p className='underline-blue'></p>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <p className='raleway'>My name is Reza. I'm a full stack web developer based in Jakarta, Indonesia. In 2017, I finished my Bachelor's Degree in Computer Information System. Since I was a graduate, I did some projects in terms of creating and managing mobile application. I have a very high interest in programming and I feel like to deepen this field. Therefore, I decided to join Hacktiv8 Indonesia in December 2017. I learned a lot of latest technologies related to web development.</p>
                        <p className='raleway'>I wish I can take advantage of the knowledge that I have, to solve many problem in this world using technology.</p>
                    </div>
                </div>
                <div className='row bg-black p-first'>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-2'>
                        <h3 className='text-white montseerat ft-w700 h3'>SKILLSET</h3>
                        <p className='underline-white'></p>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div>
                            <h5 className='text-white'>Javascript</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-js"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>HTML</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-html"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>CSS</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-css"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>React - Redux</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-react"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>React Native</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-reactnative"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>Vue</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-vue"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>Android (Java)</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-java"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>Redis</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-redis"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>MySQL</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-mysql"></div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h5 className='text-white'>MongoDB</h5>
                            <div className="w3-light-grey">
                                <div className="w3-blue prog-mongodb"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bg-white p-first'>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-2'>
                        <h3 className='text-steelblue montseerat ft-w700 h3'>Education</h3>
                        <p className='underline-blue'></p>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div>
                            <h5 className='raleway'>2018</h5>
                            <h3 className='raleway ft-w700 tx-align-left'>Full Stack Javascript Immersive</h3>
                            <h5 className='raleway'>Hacktiv8 Indonesia</h5>
                        </div>
                        <div className='mt-5'>
                            <h5 className='raleway'>2017</h5>
                            <h3 className='raleway ft-w700 tx-align-left'>BCs in Information System</h3>
                            <h5 className='raleway'>Airlangga University</h5>
                        </div>
                    </div>
                </div>
                <div className='row bg-black p-first'>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-2'>
                        <h3 className='text-white montseerat ft-w700 h3'>Portofolios</h3>
                        <p className='underline-white'></p>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='card'>
                            <img className='card-img-top' src='https://u.imageresize.org/v2/f2be6762-65f6-4a99-91ed-eae4828481e5.png' alt='pos' />
                            <div className='card-body'>
                                <p className='card-text raleway ft-w700 mb-0'>Point Of Sales</p>
                                <p className='card-text raleway ft-s10'><a href='https://github.com/point-of-sales-app' target='_blank' rel='noopener noreferrer'>Go to repository</a></p>
                                <button className='btn btn-sm btn-outline-primary mt-1' disabled>React</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>Redux</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>D3</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>Express</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>MySQL</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>GCP</button>
                                <button className='btn btn-sm btn-outline-primary mt-1 ml-2' disabled>Android</button>
                            </div>
                        </div>
                        <div className='card mt-5'>
                            <img className='card-img-top' src='https://u.imageresize.org/v2/fa73e2ad-c3c2-4081-9505-6adfea6d5c16.png' alt='kanban' />
                            <div className='card-body'>
                                <p className='card-text raleway ft-w700 mb-0'>Simple Kanban</p>
                                <p className='card-text raleway ft-s10'><a href='https://github.com/rezapramudhika/kanban' target='_blank' rel='noopener noreferrer'>Go to repository</a></p>
                                <button className='btn btn-sm btn-outline-primary' disabled>Vue</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Vuex</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Firebase</button>
                            </div>
                        </div>
                        <div className='card mt-5'>
                            <img className='card-img-top' src='https://u.imageresize.org/v2/e4484049-2712-4488-ab6e-4829eb982fb7.png' alt='inspecta' />
                            <div className='card-body'>
                                <p className='card-text raleway ft-w700 mb-0'>Inspecta (Talent inspector)</p>
                                <p className='card-text raleway ft-s10'><a href='https://github.com/inspect-your-talent' target='_blank' rel='noopener noreferrer'>Go to repository</a></p>
                                <button className='btn btn-sm btn-outline-primary' disabled>React Native</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Redux</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Google Vision</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Express</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>Redis</button>
                                <button className='btn btn-sm btn-outline-primary ml-2' disabled>MongoDB</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bg-white p-first'>
                    <div className='col-sm-12 col-md-4 col-lg-4 mb-2'>
                        <h3 className='text-steelblue montseerat ft-w700 h3'>Contact</h3>
                        <p className='underline-blue'></p>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div>
                            <p className='raleway'>Please feel free to reach me if you have any questions or anything to discuss.
                                Also, you could always just send me a friendly hello.</p>
                        </div>
                        <img width='40' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzEuMDEyIDMxLjAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuMDEyIDMxLjAxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNS4xMDksMjEuNTFjLTAuMTIzLDAtMC4yNDYtMC4wNDUtMC4zNDItMC4xMzZsLTUuNzU0LTUuMzk4Yy0wLjIwMS0wLjE4OC0wLjIxMS0wLjUwNS0wLjAyMi0wLjcwNiAgICBjMC4xODktMC4yMDMsMC41MDQtMC4yMTIsMC43MDctMC4wMjJsNS43NTQsNS4zOThjMC4yMDEsMC4xODgsMC4yMTEsMC41MDUsMC4wMjIsMC43MDZDMjUuMzc1LDIxLjQ1NywyNS4yNDMsMjEuNTEsMjUuMTA5LDIxLjUxeiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiNFMERCREIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNS45MDIsMjEuNTFjLTAuMTMzLDAtMC4yNjYtMC4wNTMtMC4zNjUtMC4xNThjLTAuMTg5LTAuMjAxLTAuMTc5LTAuNTE4LDAuMDIyLTAuNzA2bDUuNzU2LTUuMzk4ICAgIGMwLjIwMi0wLjE4OCwwLjUxOS0wLjE4LDAuNzA3LDAuMDIyYzAuMTg5LDAuMjAxLDAuMTc5LDAuNTE4LTAuMDIyLDAuNzA2bC01Ljc1Niw1LjM5OEM2LjE0OCwyMS40NjUsNi4wMjUsMjEuNTEsNS45MDIsMjEuNTF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjRTBEQkRCIj48L3BhdGg+Cgk8L2c+Cgk8cGF0aCBkPSJNMjguNTEyLDI2LjUyOUgyLjVjLTEuMzc4LDAtMi41LTEuMTIxLTIuNS0yLjVWNi45ODJjMC0xLjM3OSwxLjEyMi0yLjUsMi41LTIuNWgyNi4wMTJjMS4zNzgsMCwyLjUsMS4xMjEsMi41LDIuNXYxNy4wNDcgICBDMzEuMDEyLDI1LjQwOCwyOS44OSwyNi41MjksMjguNTEyLDI2LjUyOXogTTIuNSw1LjQ4MmMtMC44MjcsMC0xLjUsMC42NzMtMS41LDEuNXYxNy4wNDdjMCwwLjgyNywwLjY3MywxLjUsMS41LDEuNWgyNi4wMTIgICBjMC44MjcsMCwxLjUtMC42NzMsMS41LTEuNVY2Ljk4MmMwLTAuODI3LTAuNjczLTEuNS0xLjUtMS41SDIuNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg5ODk4OSIgZGF0YS1vbGRfY29sb3I9IiNFMERCREIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0xNS41MDYsMTguMDE4Yy0wLjY2NSwwLTEuMzMtMC4yMjEtMS44MzYtMC42NjJMMC44Myw2LjE1NUMwLjYyMiw1Ljk3NCwwLjYsNS42NTgsMC43ODEsNS40NDkgICBjMC4xODMtMC4yMDgsMC40OTgtMC4yMjcsMC43MDYtMC4wNDhsMTIuODQsMTEuMmMwLjYzOSwwLjU1NywxLjcxOSwwLjU1NywyLjM1NywwTDI5LjUwOCw1LjQxOSAgIGMwLjIwNy0wLjE4MSwwLjUyMi0wLjE2MSwwLjcwNiwwLjA0OGMwLjE4MSwwLjIwOSwwLjE2LDAuNTI0LTAuMDQ4LDAuNzA2TDE3LjM0MiwxNy4zNTUgICBDMTYuODM1LDE3Ljc5NywxNi4xNzEsMTguMDE4LDE1LjUwNiwxOC4wMTh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4OTg5ODkiIGRhdGEtb2xkX2NvbG9yPSIjRTBEQkRCIj48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg==" alt='mail-icon' />
                        <p className='raleway ft-w700 ft-s24'>rezapramudhika@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
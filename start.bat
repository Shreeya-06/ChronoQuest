@echo off
title ChronoQuest Archaeological Server
echo ========================================================
echo   CHRONOQUEST - Ancient Civilization Guessing Game
echo ========================================================
echo.
echo Starting local web server at http://localhost:8000 ...
echo Opening ChronoQuest in your default web browser...
echo.
start http://localhost:8000
python -m http.server 8000
pause

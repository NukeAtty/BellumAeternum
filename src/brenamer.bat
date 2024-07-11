@echo off
setlocal enabledelayedexpansion

:: Define the directory containing the .m4a files
set "directory=."

:: Find .m4a files and store their paths in an array
set i=0
for %%f in ("%directory%\*.m4a") do (
    set "files[!i!]=%%f"
    set /a i+=1
)

:: Ensure there are exactly two .m4a files
if not !i! equ 2 (
    echo There should be exactly two .m4a files in the folder.
    pause
    exit /b
)

:: Get the file sizes
for %%i in (0 1) do (
    set "file=!files[%%i]!"
    for %%a in (!file!) do set "size[%%i]=%%~za"
)

:: Compare the file sizes and rename accordingly
if !size[0]! gtr !size[1]! (
    ren "!files[0]!" *.mp4
    ren "!files[1]!" *.wav
) else (
    ren "!files[0]!" *.wav
    ren "!files[1]!" *.mp4
)

echo Files have been renamed.
pause

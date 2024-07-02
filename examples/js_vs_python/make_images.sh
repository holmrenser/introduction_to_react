SILICON_COMMAND="silicon --output code_images/%.png --font Menlo --tab-width 2 --pad-horiz 20 --pad-vert 20 --background '#FFF' --window-title %"
find . -name "*py" | xargs -n 1 -P 1 -I % sh -c "$SILICON_COMMAND --theme 'Visual Studio Dark+' %"
find . -name "*js" | xargs -n 1 -P 1 -I % sh -c "$SILICON_COMMAND --theme Dracula %"
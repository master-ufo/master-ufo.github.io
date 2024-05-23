gifsicle -O3 --colors 256 --lossy=30 -o $1 $1
gifsicle --resize-height $2 -i $1 > resized-$1
rm $1
mv resized-$1 $1
ffmpeg -i $1 -c vp9 -b:v 0 -crf 30 $1.webm

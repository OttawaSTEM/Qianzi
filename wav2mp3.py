import os
from pydub import AudioSegment



def main():
    AudioSegment.converter = "ffmpeg.exe"
    path = os.getcwd()
    items = os.listdir('Library/N')
    for item in items:
        if 'wav' in item:
            filename_wav = os.path.join(path, 'Library', 'N', item)
            filename_mp3 = filename_wav.replace('wav', 'mp3')

            sound = AudioSegment.from_file(filename_wav)
            sound.export(filename_mp3, format='mp3')

            print(filename_mp3)


if __name__ == "__main__":
    print(os.getcwd())
    main()

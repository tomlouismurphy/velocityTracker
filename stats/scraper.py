from bs4 import BeautifulSoup

import requests

page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_05_03_bosmlb_texmlb_1/&s_type=3&h_size=700&v_size=500')

data = page.text

soup = BeautifulSoup(data, 'html5lib')

whole_text = str(soup)

pitch_list = whole_text.split('2018-05-04')

pitch_list.pop(0)

# print(pitch_list[85])

pitch_test = pitch_list[85].split('</td>')

print(pitch_test[0])

print(pitch_test[1])

print(pitch_test[2])

print(len(pitch_test))

print(len(pitch_list))
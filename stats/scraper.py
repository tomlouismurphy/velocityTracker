from bs4 import BeautifulSoup

import requests

page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_05_03_bosmlb_texmlb_1/&s_type=3&h_size=700&v_size=500')

data = page.text

soup = BeautifulSoup(data, 'html5lib')

whole_text = str(soup)

pitch_list = whole_text.split('2018-05-04')

pitch_list.pop(0)

segmented_pitch_list = [x.split('</td>') for x in pitch_list]

def white_space_remove(s):
	if (len(s) > 22):
		return s[22:]

final_pitch_list = [[white_space_remove(y) for y in x] for x in segmented_pitch_list]

for w in range(86):
	print(final_pitch_list[w][6])

print(final_pitch_list[55][1])

print(segmented_pitch_list[55][1][22:])

# pitch_test = pitch_list[85].split('</td>')

# pitch_test.pop(0)

# pitch_test.pop(50)

# print(len(pitch_test))

# print(len(pitch_test[2]))

# pitches_fix = [x[22:] for x in pitch_test]

# print(pitches_fix[22])

# print(pitches_fix[49])
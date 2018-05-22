from bs4 import BeautifulSoup

import requests, json, re

def white_space_remove(s):
	if (len(s) > 22):
		return s[22:]

def json_validator(data):
    try:
        json.loads(data)
        return True
    except ValueError as error:
        print("invalid json: %s" % error)
        return False

#David Price, March 30 vs. Tampa Bay Rays

mar30_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_03_30_bosmlb_tbamlb_1/&s_type=&h_size=700&v_size=500')

mar30_data = mar30_page.text

mar30_soup = BeautifulSoup(mar30_data, 'html5lib')

mar30_whole_text = str(mar30_soup)

mar30_pitch_list2 = mar30_whole_text.replace('2018-03-31', '2018-03-30')

mar30_pitch_list = mar30_pitch_list2.split('2018-03-30')

mar30_pitch_list.pop(0)

mar30_segmented_pitch_list = [x.split('</td>') for x in mar30_pitch_list]

mar30_final_pitch_list = [[white_space_remove(y) for y in x] for x in mar30_segmented_pitch_list]

mar30_exportable_pitch = json.dumps(mar30_final_pitch_list)

# Used below function to create the json file, and I'm now commenting it out to avoid overwriting

# with open('price_mar30.json', 'w') as f:
# 	f.write(mar30_exportable_pitch)

# The three operations below are relics from testing phase that I'm preserving

# for w in range(76):
# 	print(mar30_final_pitch_list[w][6])

# print(mar30_final_pitch_list[55][1])

# print(mar30_segmented_pitch_list[55][1][22:])

#David Price, April 5 vs. Tampa Bay Rays

apr05_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_04_05_tbamlb_bosmlb_1/&s_type=&h_size=700&v_size=500')

apr05_data = apr05_page.text

apr05_soup = BeautifulSoup(apr05_data, 'html5lib')

apr05_whole_text = str(apr05_soup)

apr05_pitch_list = apr05_whole_text.split('2018-04-05')

apr05_pitch_list.pop(0)

apr05_segmented_pitch_list = [x.split('</td>') for x in apr05_pitch_list]

apr05_final_pitch_list = [[white_space_remove(y) for y in x] for x in apr05_segmented_pitch_list]

apr05_exportable_pitch = json.dumps(apr05_final_pitch_list)

# with open('price_apr05.json', 'w') as f:
# 	f.write(apr05_exportable_pitch)

#David Price, April 11 vs. New York Yankees

apr11_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_04_11_nyamlb_bosmlb_1/&s_type=&h_size=700&v_size=500')

apr11_data = apr11_page.text

apr11_soup = BeautifulSoup(apr11_data, 'html5lib')

apr11_whole_text = str(apr11_soup)

apr11_pitch_list = apr11_whole_text.split('2018-04-11')

apr11_pitch_list.pop(0)

apr11_segmented_pitch_list = [x.split('</td>') for x in apr11_pitch_list]

apr11_final_pitch_list = [[white_space_remove(y) for y in x] for x in apr11_segmented_pitch_list]

apr11_exportable_pitch = json.dumps(apr11_final_pitch_list)

# with open('price_apr11.json', 'w') as f:
# 	f.write(apr11_exportable_pitch)

#David Price, April 17 vs. Los Angeles Angels

apr17_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_04_17_bosmlb_anamlb_1/&s_type=&h_size=700&v_size=500')

apr17_data = apr17_page.text

apr17_soup = BeautifulSoup(apr17_data, 'html5lib')

apr17_whole_text = str(apr17_soup)

apr17_pitch_list = apr17_whole_text.split('2018-04-18')

apr17_pitch_list.pop(0)

apr17_segmented_pitch_list = [x.split('</td>') for x in apr17_pitch_list]

apr17_final_pitch_list = [[white_space_remove(y) for y in x] for x in apr17_segmented_pitch_list]

apr17_exportable_pitch = json.dumps(apr17_final_pitch_list)

# with open('price_apr17.json', 'w') as f:
# 	f.write(apr17_exportable_pitch)

#David Price, April 22 vs. Oakland Athletics

apr22_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_04_22_bosmlb_oakmlb_1/&s_type=&h_size=700&v_size=500')

apr22_data = apr22_page.text

apr22_soup = BeautifulSoup(apr22_data, 'html5lib')

apr22_whole_text = str(apr22_soup)

apr22_pitch_list = apr22_whole_text.split('2018-04-22')

apr22_pitch_list.pop(0)

apr22_segmented_pitch_list = [x.split('</td>') for x in apr22_pitch_list]

apr22_final_pitch_list = [[white_space_remove(y) for y in x] for x in apr22_segmented_pitch_list]

apr22_exportable_pitch = json.dumps(apr22_final_pitch_list)

# with open('price_apr22.json', 'w') as f:
# 	f.write(apr22_exportable_pitch)

#David Price, April 28 vs. Tampa Bay Rays

apr28_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_04_28_tbamlb_bosmlb_1/&s_type=&h_size=700&v_size=500')

apr28_data = apr28_page.text

apr28_soup = BeautifulSoup(apr28_data, 'html5lib')

apr28_whole_text = str(apr28_soup)

apr28_pitch_list = apr28_whole_text.split('2018-04-28')

apr28_pitch_list.pop(0)

apr28_segmented_pitch_list = [x.split('</td>') for x in apr28_pitch_list]

apr28_final_pitch_list = [[white_space_remove(y) for y in x] for x in apr28_segmented_pitch_list]

apr28_exportable_pitch = json.dumps(apr28_final_pitch_list)

# with open('price_apr28.json', 'w') as f:
# 	f.write(apr28_exportable_pitch)

#David Price, May 3 vs. Texas Rangers

may03_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_05_03_bosmlb_texmlb_1/&s_type=3&h_size=700&v_size=500')

may03_data = may03_page.text

may03_soup = BeautifulSoup(may03_data, 'html5lib')

may03_whole_text = str(may03_soup)

may03_pitch_list = may03_whole_text.split('2018-05-04')

may03_pitch_list.pop(0)

may03_segmented_pitch_list = [x.split('</td>') for x in may03_pitch_list]

may03_final_pitch_list = [[white_space_remove(y) for y in x] for x in may03_segmented_pitch_list]

may03_exportable_pitch = json.dumps(may03_final_pitch_list)

# with open('price_may03.json', 'w') as f:
# 	f.write(may03_exportable_pitch)

#David Price, May 12 vs. Toronto Blue Jays

may12_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_05_12_bosmlb_tormlb_1/&s_type=&h_size=700&v_size=500')

may12_data = may12_page.text

may12_soup = BeautifulSoup(may12_data, 'html5lib')

may12_whole_text = str(may12_soup)

may12_pitch_list = may12_whole_text.split('2018-05-12')

may12_pitch_list.pop(0)

may12_segmented_pitch_list = [x.split('</td>') for x in may12_pitch_list]

may12_final_pitch_list = [[white_space_remove(y) for y in x] for x in may12_segmented_pitch_list]

may12_exportable_pitch = json.dumps(may12_final_pitch_list)

# with open('price_may12.json', 'w') as f:
# 	f.write(may12_exportable_pitch)

#David Price, May 17 vs. Baltimore Orioles

may17_page = requests.get('http://www.brooksbaseball.net/pfxVB/tabdel_expanded.php?pitchSel=456034&game=gid_2018_05_17_balmlb_bosmlb_1/&s_type=&h_size=700&v_size=500')

may17_data = may17_page.text

may17_soup = BeautifulSoup(may17_data, 'html5lib')

may17_whole_text = str(may17_soup)

may17_pitch_list2 = may17_whole_text.replace('2018-05-18', '2018-05-17')

may17_pitch_list = may17_pitch_list2.split('2018-05-17')

may17_pitch_list.pop(0)

may17_segmented_pitch_list = [x.split('</td>') for x in may17_pitch_list]

may17_final_pitch_list = [[white_space_remove(y) for y in x] for x in may17_segmented_pitch_list]

may17_exportable_pitch = json.dumps(may17_final_pitch_list)

# with open('price_may17.json', 'w') as f:
# 	f.write(may17_exportable_pitch)

# Initial Testing Data

# pitch_test = pitch_list[85].split('</td>')

# pitch_test.pop(0)

# pitch_test.pop(50)

# print(len(pitch_test))

# print(len(pitch_test[2]))

# pitches_fix = [x[22:] for x in pitch_test]

# print(pitches_fix[22])

# print(pitches_fix[49])
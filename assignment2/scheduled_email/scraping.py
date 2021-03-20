import requests
from bs4 import BeautifulSoup
from scheduled_email.mail_utils import send_email


def get_web_content(email_meta):
    url = "https://www.sharp.com/health-classes/volunteer-registration-grossmont-center-covid-19-vaccine-clinic-2558"
    response = requests.get(url)
    if response.status_code == 200:
        # get the HTML structure from the requests response
        soup = BeautifulSoup(response.text, 'lxml')
        # find all anchor tags
        all_a_tags = soup.find_all('a')
        for tag in all_a_tags:
            if 'Classes and Events' in tag.get_text() or 'More Info' in tag.get_text():
                send_email(email_meta[0], email_meta[1], email_meta[2])
                print("Successfully sent an email")

    else:
        print("err requesting this url")

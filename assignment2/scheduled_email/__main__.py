from scheduled_email.scraping import get_web_content
import schedule
import time


def start_cron_job():
    # for testing, we check the web content every 5 second and send email.
    # we can also set different intervals in the future as needed
    sender_email = input("Please enter sender email: ")
    receiver_email = input("Please enter receiver email: ")
    password = input("Type your password and press enter: ")
    schedule.every(5).seconds.do(get_web_content, email_meta = [sender_email, receiver_email, password])
    while True:
        # run_pending
        schedule.run_pending()
        time.sleep(1)


start_cron_job()

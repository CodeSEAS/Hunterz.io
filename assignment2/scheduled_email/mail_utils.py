import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(sender, receiver, password):

    message = MIMEMultipart("alternative")
    message["Subject"] = "Reminder: sign up as volunteer at covid centers"
    message["From"] = sender
    message["To"] = receiver

    html = """\
    <html>
      <body>
        <p>Hi,<br>
           How are you?<br><br>
           This is from California, here's a list of Covid centers where you can sign up as volunteer.<br>
           There's an opening either with "More info" or "Classes and Events" <br>
           <a href="https://www.sharp.com/health-classes/volunteer-registration-grossmont-center-covid-19-vaccine-clinic-2558">Please check it out</a> <br>
            <br>
            Best,<br>
            <a href="https://www.hunterz.io/?utm_source=Google&utm_medium=Search&utm_campaign=062220-072220_G_Search&utm_term=%2Bhunterz&utm_content=442395734306&gclid=CjwKCAjw9MuCBhBUEiwAbDZ-7gMdem4NJNuQvi9b4IJb6PHWjFYSzSOTe6wUCXlAblyv9WFaOhvIqBoCRX0QAvD_BwE">Hunterz.io</a>
        </p>
      </body>
    </html>
    """

    message.attach(MIMEText(html, "html"))

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender, password)
        server.sendmail(
            sender, receiver, message.as_string()
        )

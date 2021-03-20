from setuptools import setup, find_packages

setup(
    name='scheduled_email',
    version='0.01',
    description='Hunterz io assignment 2',
    author='Manjun',
    author_email='..',
    url='https://github.com/',
    packages=find_packages(exclude=('tests', 'docs')),
    data_files=[
        ('doc', ['requirements.txt'])
    ],
)
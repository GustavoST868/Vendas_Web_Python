import sqlite3
from tkinter import messagebox

class UserDatabase:
    def __init__(self,db_name='user_database.db'):
        self.db_name = db_name
        self.connection = None
        self.cursor = None

    def connect(self):
        try:
            self.connection = sqlite3.connect(self.db_name)
            self.cursor = self.connection.cursor()
        except ValueError:
            messagebox.showinfo("Info","Erro ao conectar ao banco user_database!")

    
    def disconnect(self):
        try:
            if self.connection:
                self.connection.close()
        except ValueError:
            messagebox.showinfo("Info","Erro ao disconectar do banco user_database")

    def create_table(self,table_name):
        pass
import tkinter as tk
from tkinter import ttk

root = tk.Tk()

root.title("Campaign Object-oriented Producer")

window_width = 1280
window_height = 720

screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

root.geometry(f'{window_width}x{window_height}')
root.resizable(True, True)

message = tk.Label(root, text="战役面向对象制作器")
message.pack()

root.mainloop()

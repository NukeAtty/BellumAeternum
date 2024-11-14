
def TextFileWriter(FinalResult):

	f = open("output.txt", "a")
	f.write(FinalResult)
	f.close()

	#open and read the file after the appending:
	f = open("output.txt", "r")
	print(f.read())

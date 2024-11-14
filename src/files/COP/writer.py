
def TextFileWriter(FinalResult):

	f = open("workflow.txt", "a")
	f.write(FinalResult)
	f.close()

	#open and read the file after the appending:
	f = open("workflow.txt", "r")
	print(f.read())
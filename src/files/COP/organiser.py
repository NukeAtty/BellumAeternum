def Organiser(Triggers,Events,Actions,Tags,Variables):
	FinalResult = "[Triggers]\n" + Triggers + "\n[Events]\n" + Events + "\n[Actions]\n" + Actions + "\n[Tags]\n" + Tags + "\nVariables]\n" +Variables
	return (FinalResult)

FinalResult = Organiser(Triggers,Events,Actions,Tags,Variables)

TextFileWriter(FinalResult)

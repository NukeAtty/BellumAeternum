def reader(text):
    # Split the text by lines
    lines = text.readlines()
    # Initialize a flag to detect when we are inside the trigger block
    capturing = False
    # Initialize an empty list to store the captured text
    captured_text = []
    
    for line in lines:
        # Start capturing after we see [Triggers]
        if '[Triggers]' in line:
            capturing = True
            # Skip adding the line that has [Triggers] itself
            continue
        # Stop capturing if we see a left bracket on a new line
        elif '[' in line and capturing:
            break
        # If capturing is active, add the line to captured text
        elif capturing:
            captured_text.append(line.strip())
    
    # Join all captured lines into a single string
    return captured_text
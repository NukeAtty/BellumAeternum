import configparser
from actdesc import *

def presetReader(file_path):
    # Initialize the configparser
    config = configparser.ConfigParser()
    
    # Read the INI file
    config.read(file_path)
    
    # Create separate lists for each section
    sections_data = []
    
    # Loop through each section
    for section in config.sections():
        section_list = [f"[{section}]"]  # Add section name to the list
        section_list.extend([f"{key}={value}" for key, value in config.items(section)])  # Add key-value pairs
        sections_data.append(section_list)
    
    return sections_data

if __name__ == "__main__":
    file_path = "preset.ini"  # Replace with your INI file path
    
    # Get sections as separate lists
    separated_lists = presetReader(file_path)
    
    # Output each list
    for section_list in separated_lists:
        print("\n".join(section_list))
        print("-" * 30)

    actions = actionDescriber(separated_lists)
    for x in range (0,len(actions)):
        actions[x].getPresetActions()
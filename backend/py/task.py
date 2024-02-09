from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    d = dict()
    id_to_name = dict()
    # map file.id to children
    for f in files:
        d[f.id] = list()
        id_to_name[f.id] = f.name

    # append file to parent file's children list
    for f in files:
        if f.parent != -1:
            d[f.parent].append(f.id)

    ans = list()
    for f in files:
        if len(d[f.id]) == 0:
            ans.append(id_to_name[f.id])

    # print(ans)
    return ans


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    d = dict()
    # map category to its frequency
    for f in files:
        for category in f.categories:
            d[category] = 1 + d.get(category, 0)

    # sort categories in descending order of frequency
    sorted_categories = list()
    # print(d)
    while d:
        max_key = 0
        max_val = 0
        for key, val in d.items():
            if val > max_val or (val == max_val and key < max_key):
                max_val = val
                max_key = key
        sorted_categories.append(max_key)
        del d[max_key]
    # print(sorted_categories)

    ans = list()
    for i in range(k):
        if i >= len(sorted_categories): break
        ans.append(sorted_categories[i])
    # print('ans:', ans)

    return ans


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    if len(files) == 0: return 0

    d = dict()
    id_size = dict()
    for f in files:
        d[f.id] = list()
        id_size[f.id] = f.size
    
    # map parent file to its list of children files
    for f in files:
        if f.parent != -1:
            d[f.parent].append(f.id)

    # print('parent to children:', d)
    
    total_size = dict()
    # calculate size of leaf nodes first
    leafNodes = [f for f in d if len(d[f]) == 0]
    for f in leafNodes: 
        total_size[f] = id_size[f]

    parentNodes = [f for f in d if len(d[f]) > 0]
    while len(total_size) < len(files):
        incompleteSizes = [f for f in parentNodes if f not in total_size]
        # print('INCOMPLETE SIZES:', incompleteSizes)
        for f in incompleteSizes:
            size = id_size[f]
            canCalculate = True
            for child in d[f]:
                if child not in total_size: 
                    canCalculate = False
                    break
                size += total_size[child]
            if not canCalculate: continue
            total_size[f] = size
    
    # print(total_size)

    return max(total_size.values())


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    # my test
    # assert kLargestCategories([
    #     File(2, 'file2', ["a"], -1, 1024), 
    #     File(3, 'file3', ["b"], -1, 1024), 
    #     File(4, 'file4', ["a"], -1, 1024), 
    #     File(5, 'file5', ["c"], -1, 1024), 
    # ], 3) == [
    #     'a', 'b', 'c'
    # ]
    assert largestFileSize([]) == 0

    assert largestFileSize(testFiles) == 20992

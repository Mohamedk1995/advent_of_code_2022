elf_calories = []
sum_value = 0

# Read file and sum values for each elf then get elf with max calories value
with open('input.txt', 'r') as readfile:
    for line in readfile:
        if not line.strip():
            elf_calories.append(sum_value)
            sum_value = 0
            continue
        l = int(line)
        sum_value += l

print(max(elf_calories))


# Part two
# Sort from largest to smallest
# Get the top 3 largest values

elf_calories.sort(reverse=True)
print(sum(elf_calories[:3]))

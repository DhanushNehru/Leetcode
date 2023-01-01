class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split()
        # https://docs.python.org/3/library/itertools.html#itertools.zip_longest
        return (len(set(pattern)) ==
                len(set(s)) ==
                len(set(zip_longest(pattern,s))))
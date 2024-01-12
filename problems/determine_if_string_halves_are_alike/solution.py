class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = "aeiouAEIOU"
        s_length = len(s)
        first_half_vowel_count = 0
        second_half_vowel_count = 0

        for i in range(s_length // 2):
            if s[i] in vowels:
                first_half_vowel_count += 1
            if s[s_length - i - 1] in vowels:
                second_half_vowel_count += 1

        return first_half_vowel_count == second_half_vowel_count
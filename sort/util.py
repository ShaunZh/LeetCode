class Util:
    @staticmethod
    def less(a, b):
        return a < b

    @staticmethod
    def exch(collection, i, j):
        collection[i], collection[j] = collection[j], collection[i]

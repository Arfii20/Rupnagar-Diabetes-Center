CREATE TABLE IF NOT EXISTS youtubeLinks (
    id INTEGER PRIMARY KEY,
    link TEXT(256) NOT NULL,
    title TEXT(256) NOT NULL
);

INSERT INTO youtubeLinks (link, title)
VALUES
    ('https://www.youtube.com/embed/S16TC354ql8', 'ডায়াবেটিস কি? কেন হয়? বাঁচার উপায়'),
    ('https://www.youtube.com/embed/4jP_JJ_0okM', 'মেডিসিন ছাড়া ডায়াবেটিস নিয়ন্ত্রণ'),
    ('https://www.youtube.com/embed/gIstDlkk3Q8', 'রক্তে সুগারের মাত্রা কত হলে বুঝবেন ডায়াবেটিস হয়েছে'),
    ('https://www.youtube.com/embed/baoBynXwQXQ', 'যেসব খাবার খেলে Type 2 ডায়াবেটিস কখনো ভালো হবে না'),
    ('https://www.youtube.com/embed/SGnu7735ILI', 'ডায়াবেটিস রোগীরা কি মধু খেতে পারবেন?'),
    ('https://www.youtube.com/embed/EqaK2bCETOc', 'চুল পড়ার কারণ ও প্রতিকার'),
    ('https://www.youtube.com/embed/fKkDRdhYwIE', 'সেক্স হরমোন বা টেস্টোস্টেরন হরমোন বাড়ানোর সহজ উপায়'),
    ('https://www.youtube.com/embed/pj6B59dXMS8', 'কিিভাবে ডায়াবেটিস নিয়ন্ত্রণে রাখা যায় - একটি বাস্তব উদাহরণ'),
    ('https://www.youtube.com/embed/94ykNzObiII', 'ডায়াবেটিস নিয়ন্ত্রণে ব্যায়াম কেন করবেন?'),
    ('https://www.youtube.com/embed/vu85tqYETwA', 'ডায়াবেটিস || নিজে নিজে রক্তের সুগার মাপার সঠিক নিয়ম')


import sys
try:
    import docx
except ImportError:
    print("python-docx is not installed.")
    sys.exit(1)

def extract_text_from_docx(docx_path, output_path):
    doc = docx.Document(docx_path)
    with open(output_path, 'w', encoding='utf-8') as f:
        for para in doc.paragraphs:
            if para.text.strip():
                f.write(f"[{para.style.name}] {para.text}\n")

if __name__ == "__main__":
    extract_text_from_docx("Meage-chatbot-ฐานข้อมูล.docx", "extracted_doc.txt")

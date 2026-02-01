document.getElementById('genBtn').addEventListener('click', () => {
    // 模拟 Octra 钱包逻辑
    const addr = "OCTRA-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    document.getElementById('result').innerText = "生成的地址: \n" + addr;
});